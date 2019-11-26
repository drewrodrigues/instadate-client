import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SignedInContainer from "../../components/signedInContainer";
import DateForm from "./dateForm";
import { getDate } from "./_action";
import Heart from '../../assets/love.png';
import Placeholder from "../../components/placeholder";

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      loading: true
    };
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.props.getDate(this.props.user_id)
      .then(() => this.setState({ loading: false }));
  }

  hideForm() {
    this.setState({ showForm: false })
  }

  render() {
    const Button = <TouchableOpacity style={styles.requestDateButton} onPress={() => this.setState({ showForm: true })}>
      <Text style={styles.requestDateButtonText}>{ this.props.date ? 'Edit Date' : 'New Date' }</Text>
    </TouchableOpacity>;

    return (
      <SignedInContainer loading={this.state.loading} button={Button} body={() => (
        <View>
          {this.state.showForm && <DateForm close={this.hideForm} />}

          {this.props.date && <View style={styles.date}>
            <Text style={styles.dateText}>
              { this.props.date.activity }
              { ' @' } { this.props.date.time || 'any time' }
              { ' in' } { this.props.date.location }
            </Text>
          </View>}

          {!this.props.date && (
            <Placeholder
              icon={Heart}
              headerText="You don't have a date, yet"
              subText="Add a new date or try sending a request"
            />
          )}
        </View>
      )}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 35,
  },
  image: {
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    height: 100,
    width: 100,
    position: 'absolute',
    top: -10,
    zIndex: 100
  },
  detailContainer: {
    padding: 20,
    borderRadius: 20,
    marginLeft: 60,
    paddingLeft: 50,
    flex: 1,
    backgroundColor: 'white'
  },
  detailText: {

  },
  requestDateButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10
  },
  requestDateButtonText: {
    color: 'white'
  },
  requestButton: {
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    top: -10,
    right: 10
  },
  requestButtonText: {
    color: 'white',
    fontSize: 12
  },
  date: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  dateText: {
    color: '#222',
    margin: 20
  }
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id == ownProps.creator_id),
  date: state.date,
  user_id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  getDate: user_id => dispatch(getDate(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dates);