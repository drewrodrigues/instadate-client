import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { search } from "./_action";
import Result from './_result';
import SignedInContainer from "../../components/signedInContainer";
import SearchPlaceholder from '../../assets/search.png';
import Placeholder from "../../components/placeholder";
import { FontAwesome5 } from "@expo/vector-icons";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      loading: true
    };
    this.search = this.search.bind(this);
  }

  search() {
    this.setState({ loading: true }, async () => {
      await this.props.search();
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <SignedInContainer
        customStyles={{ paddingTop: 35, paddingBottom: 0 }}
        loading={this.state.loading}
        queryOnFocus={this.search}
        body={() => (

        <View style={styles.container}>
          {this.props.results.length !== 0 && (
            <View>
              <View style={styles.searchHeader}>
                <View style={styles.textContainer}>
                  <FontAwesome5 name='calendar-day' size={16} style={styles.iconLeft} />
                  <Text style={styles.text}>Found</Text>
                  <Text style={styles.textWeighted}> {this.props.results.length }</Text>
                  <Text style={styles.text}> dates today</Text>
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.text}> within</Text>
                  <Text style={styles.textWeighted}> 5 miles</Text>
                  <FontAwesome5 name='map-marker-alt' size={16} style={styles.iconRight} />
                </View>
              </View>
              <FlatList
                data={this.props.results}
                renderItem={({ item }) => <Result {...item} />}
                keyExtractor={item => item.id}
                style={styles.list}
              />
            </View>
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
  container: {
    flex: 1,
  },
  // results: {
  //   height: '100%',
  // },
  searchHeader: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0
  },
  textContainer: {
    flexDirection: 'row'
  },
  text: {
    color: '#777',
  },
  textWeighted: {
    color: '#777',
    fontWeight: '700'
  },
  list: {
    paddingTop: 20
  },
  iconLeft: {
    color: 'red',
    marginRight: 5
  },
  iconRight: {
    color: 'red',
    marginLeft: 5
  }
});

const mapStateToProps = state => ({
  session: state.session,
  results: state.search
});

const mapDispatchToProps = dispatch => ({
  search: () => dispatch(search())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);