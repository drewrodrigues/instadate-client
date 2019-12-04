import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { search, clearSearch } from "./_action";
import Result from './_result';
import SearchPlaceholder from '../../assets/search.png';
import Placeholder from "../../components/placeholder";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";
import Loading from '../../components/loading';
import Picker from '../../components/picker';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showPicker: false,
      loading: true,
      distance: 5
    };
    this.changeDistance = this.changeDistance.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
    this.setState({ loading: true }, async () => {
      await this.props.search(this.state.distance);
      this.setState({ loading: false });
    });
  }

  changeDistance(distance) {
    this.setState({ distance }, async () => {
      await this.search();
      this.setState({ showPicker: false });
    });
  }

  render() {
    let body = null;

    if (this.state.loading) {
      body = <Loading />
    } else {
      if (this.props.results.length !== 0) {
        body = (
          <FlatList
            data={this.props.results}
            renderItem={({ item }) => <Result {...item} />}
            keyExtractor={item => item.id}
            style={styles.list}
          />
        );
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
        {this.state.showPicker && (
          <Picker
            updateCallback={this.changeDistance}
            value={this.state.distance}
            close={() => this.setState({ showPicker: false })}
          />
        )}

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

          <TouchableOpacity style={styles.textContainer} onPress={() => this.setState({ showPicker: !this.state.showPicker })}>
            <Text style={styles.text}> within</Text>
            <Text style={styles.textWeighted}> {this.state.distance} miles</Text>
            <FontAwesome5 name='map-marker-alt' size={16} style={styles.iconRight} />
          </TouchableOpacity>
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
  picker: {
    backgroundColor: 'white',
    borderColor: '#e9ebee',
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    height: 200,
    width: 200,
    top: 70,
    right: 0,
    zIndex: 250
  },
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
    height: '95%', // navbar
    paddingTop: 20,
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
  search: distance => dispatch(search(distance)),
  clearSearch: () => dispatch(clearSearch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);