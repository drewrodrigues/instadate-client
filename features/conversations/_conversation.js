import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {otherUser} from "./_selectors";
import ProfilablePicture from "../../components/profilablePicture";

function Conversation(props) {
  if (!props.otherUser) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={() => props.showConversation({ ...props, otherUser: props.otherUser})}>
      <ProfilablePicture userId={props.otherUser.id} />

      <View style={styles.conversationDetail}>
        <View style={styles.conversationDetailHeader}>
          <Text style={styles.name}>{props.otherUser.name}</Text>
        </View>
        {props.lastMessage && (
          <Text style={styles.message}>{props.lastMessage.body}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    otherUser: otherUser(state, ownProps.accepting_user_id, ownProps.requesting_user_id),
    lastMessage: state.messages.find(message => message.conversation_id === ownProps.id)
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
    // marginBottom: 10,
    paddingLeft: 20,
  },
  conversationDetail: {
    flex: 1,
    padding: 20,
    paddingLeft: 0,
  },
  conversationDetailHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  message: {
    color: '#777',
    marginTop: 10,
  }
});

export default connect(mapStateToProps)(Conversation);