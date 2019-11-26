import React, { Component } from 'react';
import Request from "../../assets/request.png";
import SignedInContainer from "../../components/signedInContainer";
import Placeholder from "../../components/placeholder";

export default class Requests extends Component {
  render() {
    return (
      <SignedInContainer
        body={() => (
          <Placeholder
            icon={Request}
            headerText="You don't have any requests, yet"
            subText="Don't worry, they'll flow in soon"
          />
      )}/>
    )
  }
}