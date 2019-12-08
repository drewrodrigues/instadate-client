import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {NavigationEvents} from "react-navigation";

import Request from '../../assets/request.png';
import Placeholder from '../../components/placeholder';
import {getSparks} from './_actions';
import Spark from './_spark';
import Loading from "../../components/loading";

class Sparks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.getSparks = this.getSparks.bind(this);
  }

  getSparks() {
    this.setState({ loading: true }, async () => {
      await this.props.getSparks();
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={this.getSparks} />
        <Loading />
      </View>
    );

    const anySparks = this.props.sparks.length > 0;

    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={this.getSparks} />
        {anySparks ? (
          <FlatList
            data={this.props.sparks}
            renderItem={({item}) => <Spark {...item}/>}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />
        ) : (
          <Placeholder
            icon={Request}
            headerText="You don't have any sparks"
            style={styles.placeholder}
            subText="Try sending sparks or creating a date"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  flatList: {
    height: '100%',
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  sparks: state.sparks
});

const mapDispatchToProps = (dispatch) => ({
  getSparks: () => dispatch(getSparks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sparks);