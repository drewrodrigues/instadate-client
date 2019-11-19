import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Logo from '../../assets/logo.png';
import DateForm from "../date/dateForm";
import { search } from "./_action";
import { getDate } from "../date/_action";
import Date from "../date/date";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      loading: true
    };
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    this.setState({ showForm: false })
  }

  componentDidMount() {
    this.props.search().then(() => this.setState({ loading: false }));
    this.props.getDate(this.props.user_id);
  }

  render() {
    console.log(window.store.getState().date);

    return (
      <View style={styles.container}>
        {this.state.showForm && <DateForm close={this.hideForm} />}
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <TouchableOpacity style={styles.requestDateButton} onPress={() => this.setState({ showForm: true })}>
            <Text style={styles.requestDateButtonText}>{ this.props.date ? 'Edit Date' : 'New Date' }</Text>
          </TouchableOpacity>
        </View>

        {this.props.date && <View>
          <Text style={styles.text}>Pending Date</Text>
        </View>}

        {this.state.loading && <Text style={styles.text}>Loading</Text>}
        {!this.state.loading && <View>
          <Text style={styles.text}>{this.props.results.length} results</Text>
          <ScrollView style={styles.results}>
            {this.props.results.map(result => (
              <Date {...result} />
            ))}
          </ScrollView>
        </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    padding: 20
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 200
  },
  requestDateButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10
  },
  requestDateButtonText: {
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center'
  },
  results: {
    paddingTop: 10,
  }
});

const mapStateToProps = state => ({
  date: state.date,
  user_id: state.session.id,
  session: state.session,
  results: state.search
});

const mapDispatchToProps = dispatch => ({
  getDate: user_id => dispatch(getDate(user_id)),
  search: () => dispatch(search())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);