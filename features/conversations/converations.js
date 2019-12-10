import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {getConversations} from "./_actions";
import Loading from "../../components/loading";
import Conversation from './_conversation';
import MessagePlaceholder from '../../assets/messagePlaceholder.png';

function Conversations(props) {
  const [loading, setLoading] = useState(true);

  async function getConversations() {
    setLoading(true);
    await props.getConversations();
    setLoading(false);
  }

  if (loading) return <View>
    <NavigationEvents onWillFocus={getConversations} />
    <Loading />
  </View>;

  if (props.conversations.length === 0) {
    return (
      <View style={styles.placeholderContainer}>
        <Image source={MessagePlaceholder} style={styles.placeholderImage}/>
        <Text style={styles.placeholderTitle}>You don't have any messages, yet.</Text>
        <Text style={styles.placeholderSubtitle}>Try sending or accepting a spark.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={getConversations} />
      <Text style={styles.headerText}>
        {props.conversations.length} Message{props.conversations.length === 1 ? '' : 's'}
      </Text>
      {props.conversations.map(conversation => (
        <Conversation {...conversation} />
      ))}
    </View>
  )
}

const mapStateToProps = (state) => ({
  conversations: state.conversations,
});

const mapDispatchToProps = (dispatch) => ({
  getConversations: () => dispatch(getConversations())
});

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  headerText: {
    color: '#222',
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 72,
    color: 'red',
  },
  // placeholder
  placeholderContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  placeholderImage: {
    marginBottom: 20,
  },
  placeholderTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  placeholderSubtitle: {
    color: '#777',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);