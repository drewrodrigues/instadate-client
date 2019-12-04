import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateForm from "./dateForm";
import { getDates } from "./_action";
import Heart from '../../assets/love.png';
import Placeholder from "../../components/placeholder";
import { NavigationEvents } from "react-navigation";
import Loading from "../../components/loading";

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      loading: true
    };
    this.hideForm = this.hideForm.bind(this);
    this.getDates = this.getDates.bind(this);
  }

  getDates() {
    this.setState({ loading: true }, async () => {
      await this.props.getDate();
      this.setState({ loading: false });
    });
  }

  hideForm() {
    this.setState({ showForm: false })
  }

  render() {
    if (this.state.loading) return <View>
      <NavigationEvents onWillFocus={this.getDates} />
      <Loading />
    </View>;

    const Button = <TouchableOpacity style={styles.requestDateButton} onPress={() => this.setState({ showForm: true })}>
      <Text style={styles.requestDateButtonText}>{ this.props.dates.length > 0 ? 'Edit Date' : 'New Date' }</Text>
    </TouchableOpacity>;

    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={this.getDates} />
        {Button}
        {this.state.showForm && <DateForm close={this.hideForm} />}

        {this.props.dates.length > 0 && <View style={styles.date}>
          {this.props.dates.map(date => (<View>
            <Text style={styles.dateText} key={date.id}>
              { date.activity }
              { ' @' } { date.time || 'any time' }
              { ' in' } { date.city }
            </Text>
          </View>))}
        </View>}

        {this.props.dates.length === 0 && (
          <Placeholder
            icon={Heart}
            headerText="You don't have a date, yet"
            subText="Add a new date or try sending a request"
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
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

const mapStateToProps = state => ({
  dates: state.dates,
  user_id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  getDate: () => dispatch(getDates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dates);