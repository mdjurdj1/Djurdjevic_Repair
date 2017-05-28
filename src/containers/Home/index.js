import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import './home.css';

class Home extends Component {
  render() {
    return (
      <Container text id="home">
       <Header as='h2'>Computer Repair Servicing The Capital District!</Header>
       <div className="ui divider"></div>
       <p className="blue">Need Computer Help? Come call or visit us and we will fix your problem!</p>
       <p />
       <p>Here at Djurdjevic repair, we aim to provide fast service.</p>
     </Container>
    );
  }
}

export default Home;
