import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {NavigationEvents} from "react-navigation";
import Loading from "../../components/loading";
import {getConversation} from './_actions';
import ProfilablePicture from "../../components/profilablePicture";

class ConversationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    this.getConversation();
  }

  async getConversation() {
    await this.props.getConversation();
    this.setState({loading: false});
  }

  render() {
    if (this.state.loading) return <Modal>
      <View style={styles.container}>
        <NavigationEvents onDidFocus={getConversation} />
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.close} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>

        <Loading />
      </View>
    </Modal>;

    return (
      <Modal>
        <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.props.close} style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.otherUserName}>{this.props.otherUser.name}</Text>
          </View>

          <View style={styles.messagesLeftContainer}>
            <Text style={styles.messagesLeftText}>5 Messages Left</Text>
            <Text style={styles.messagesSubtext}>Get to know the basics of each other and get to a date!</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.otherUserMessage}>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <View style={styles.myMessage}>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <View style={styles.otherUserMessage}>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <View style={styles.otherUserMessage}>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <View style={styles.myMessage}>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
          </View>

          <View style={styles.messageSendContainer}>
            <TextInput style={styles.messageInput} placeholder="Type a message here" />

            <TouchableOpacity style={styles.messageSendButton}>
              <Text style={styles.messageSendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getConversation: async () => dispatch(getConversation(ownProps.conversation.id))
});

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    width: '100%',
  },
  header: {
    position: 'relative',
  },
  closeButton: {
    left: 0,
    padding: 10,
    position: 'absolute',
    zIndex: 100,
  },
  otherUserName: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  messagesLeftContainer: {
    backgroundColor: 'pink',
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },
  messagesLeftText: {
    fontWeight: '700',
    textAlign: 'center',
  },
  messagesSubtext: {
    textAlign: 'center',
  },
  content: {
    flex: 10,
    justifyContent: 'flex-end',
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 25,
    marginTop: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginLeft: 25,
    marginTop: 10,
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(ConversationModal);