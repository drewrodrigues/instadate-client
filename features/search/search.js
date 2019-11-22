import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { search } from "./_action";
import Result from './_result';
import SignedInContainer from "../../components/signedInContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      loading: true
    };
  }

  componentDidMount() {
    this.props.search().then(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <SignedInContainer loading={this.state.loading} body={() => (
        <View>
          <Text style={styles.text}>{this.props.results.length} results</Text>
          <ScrollView style={styles.results}>
            {this.props.results.map(result => (
              <Result {...result} />
            ))}
          </ScrollView>
        </View>
      )}/>
    )
  }
}

const styles = StyleSheet.create({
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
  session: state.session,
  results: state.search
});

const mapDispatchToProps = dispatch => ({
  search: () => dispatch(search())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);