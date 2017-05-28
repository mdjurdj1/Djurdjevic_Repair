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
       <p>Here at Djurdjevic repair, we aim to provide lightning-fast, professional computer repairs within a single business day.
       Can't bring your computer here? We can come over to your house instead!
        </p>
       <p>Here are some of the problems we can help you with! </p>
       <ul>
        <li>Virus/Spyware Removal</li>
        <li>PC Tune-Ups</li>
        <li>Data Backup and Restore</li>
        <li>Data Transfer</li>
        <li>Building Custom Computers</li>
        <li>Upgrade Hard-Drive, Memory, Graphics Card, & More!</li>
        <li>Full Installation of New Computers</li>
        <li>Installing Software</li>
       </ul>
     </Container>
    );
  }
}

export default Home;
