import React from 'react';
import {connect} from 'react-redux';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationEvents} from "react-navigation";
import Loading from "../../components/loading";
import {getConversation} from './_actions';

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
        <Loading />
        <TouchableOpacity onPress={this.props.close}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>;

    return (
      <Modal>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.close}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Text>Conversation</Text>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getConversation: async () => dispatch(getConversation(ownProps.id))
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
    paddingTop: 150,
    width: '100%',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationModal);