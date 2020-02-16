import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {connect} from 'react-redux';

interface AddMessageInputProps {
  conversationId: number;
}

function AddMessageInput<AddMessageInputProps>({conversationId, sendMessage}) {
  const [input, setInput] = useState<string>('');

  const updateInputText = useCallback((value) => {
    setInput(value);
  }, []);

  const onPress = useCallback(() => {
    sendMessage({conversation_id: conversationId, body: input})
      .then(() => {
        setInput('');
      });
  }, [conversationId, input]);

  return (
    <View style={styles.messageSendContainer}>
      <TextInput style={styles.messageInput} placeholder="Type a message here" onChangeText={updateInputText} value={input} />

      <TouchableOpacity style={styles.messageSendButton} onPress={onPress}>
        <Text style={styles.messageSendText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  messageSendContainer: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginTop: 10,
    overflow: 'hidden',
  },
  messageInput: {
    flex: 4,
    padding: 20,
  },
  messageSendButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 20,
  },
  messageSendText: {
    color: 'white',
  }
});

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (message) => dispatch(sendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessageInput);
