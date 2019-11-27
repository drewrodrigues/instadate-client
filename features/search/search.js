import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { search } from "./_action";
import Result from './_result';
import SignedInContainer from "../../components/signedInContainer";
import SearchPlaceholder from '../../assets/search.png';
import Placeholder from "../../components/placeholder";
import { NavigationEvents } from 'react-navigation';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      loading: true
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  search() {
    this.setState({ loading: true }, () => {
      this.props.search().then(() => this.setState({ loading: false }));
    });
  }

  render() {
    return (
      <SignedInContainer loading={this.state.loading} body={() => (
        <View>
          <NavigationEvents onWillFocus={this.search}/>
          {this.props.results.length !== 0 && (
            <ScrollView style={styles.results}>
              <Text style={styles.text}>{this.props.results.length} dates</Text>
              {this.props.results.map(result => (
                <Result {...result} />
              ))}
            </ScrollView>
          )}

          {this.props.results.length === 0 && (
            <Placeholder
              icon={SearchPlaceholder}
              headerText="No dates found"
              subText="Try changing your search filters or add your own date"
            />
          )}
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