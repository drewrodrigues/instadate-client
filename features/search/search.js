import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { search, clearSearch } from "./_action";
import Result from './_result';
import SearchPlaceholder from '../../assets/search.png';
import Placeholder from "../../components/placeholder";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";
import Loading from '../../components/loading';

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
    let body = null;

    if (this.state.loading) {
      body = <Loading />
    } else {
      if (this.props.results.length !== 0) {
        body = <View>
          <FlatList
            data={this.props.results}
            renderItem={({ item }) => <Result {...item} />}
            keyExtractor={item => item.id}
            style={styles.list}
          />
        </View>;
      } else {
        body = <Placeholder
          icon={SearchPlaceholder}
          headerText="No dates found"
          subText="Try changing your search filters or add your own date"
        />;
      }
    }

    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={this.search} onWillBlur={this.props.clearSearch} />
        <View style={styles.searchHeader}>
          <View style={styles.textContainer}>
            <FontAwesome5 name='calendar-day' size={16} style={styles.iconLeft} />
            {this.state.loading && (
              <Text style={styles.text}>Searching dates today</Text>
            )}

            {!this.state.loading && <>
              <Text style={styles.text}>Found</Text>
              <Text style={styles.textWeighted}> {this.props.results.length }</Text>
              <Text style={styles.text}> dates today</Text>
            </>}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}> within</Text>
            <Text style={styles.textWeighted}> 5 miles</Text>
            <FontAwesome5 name='map-marker-alt' size={16} style={styles.iconRight} />
          </View>
        </View>
        {body}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ebee',
    height: '100%',
    padding: 20,
    paddingTop: 35,
    paddingBottom: 0
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
  search: () => dispatch(search()),
  clearSearch: () => dispatch(clearSearch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);