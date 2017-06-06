import React, {Component} from 'react'
import { Container, Header, Image, Grid } from 'semantic-ui-react'
import './contact.css'

export default class Contact extends Component {
  render() {
    return (
      <Container text id="contact_div">
         <Header as='h1' id="contact">Contact us and we'll see if we can help!</Header>
          <div className="ui divider"></div>
          <p className="contact_p">Phone: 518-610-8190</p>
          <p className="contact_p">Cell: 718-662-6765</p>
          <p className="contact_p">Email: mdjurdj1@gmail.com</p>
          <h3> Leave a message on any of the above contacts, and we'll get back to you right away!</h3>
      </Container>
    )
  }
}
