import React, { Component } from 'react';
import { Container, Header, Image, Grid } from 'semantic-ui-react'
import './home.css';

class Home extends Component {
  render() {
    return (
      <Container text id="home">
       <Header as='h1' id="home">Welcome to DJ's Computer Repair Shop!</Header>
       <div className="ui divider"></div>
       <p className="blue">Need Computer Help? Give us a call or email for a FREE diagnostic!</p>
       <p />
       <p>Here at DJ's Computers, we aim to provide lightning-fast, professional computer repairs within a single business day. If we can't
       fix your computer, there won't be any fee!
        </p>
       <p>Here are some of the problems we can help you with! </p>

       <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src='../services_image.jpg' size="large" id="nofix_nofee"/>
          </Grid.Column>
          <Grid.Column>
           <ul>
            <li>Virus/Spyware Removal</li>
            <li>PC Tune-Ups</li>
            <li>Data Backup and Restore</li>
            <li>Cracked Phone Screen Repair</li>
            <li>Data Transfer</li>
            <li>Building Custom Computers</li>
            <li>Upgrade Hard-Drive, Memory, Graphics Card, & More!</li>
            <li>Full Installation of New Computers</li>
            <li>Installing Software</li>
            <li>And much more!</li>
           </ul>
          </Grid.Column>
          </Grid.Row>
        </Grid>
     </Container>
    );
  }
}

export default Home;
