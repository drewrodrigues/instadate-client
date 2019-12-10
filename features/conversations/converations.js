import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {getConversations} from "./_actions";
import Loading from "../../components/loading";

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

  return (
    <View>
      <NavigationEvents onWillFocus={getConversations} />
      {props.conversations.map(conversation => (
        <Text style={styles.text} key={conversation.id}>{conversation.id}</Text>
      ))}
    </View>
  )
}

const mapStateToProps = (state) => ({
  conversations: state.conversations
});

const mapDispatchToProps = (dispatch) => ({
  getConversations: () => dispatch(getConversations())
});

const styles = StyleSheet.create({
  text: {
    fontSize: 72,
    color: 'red',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);