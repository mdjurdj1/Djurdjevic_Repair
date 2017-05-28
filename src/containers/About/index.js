import React, {Component} from 'react'
import { Container, Header, Image, Grid } from 'semantic-ui-react'
import './about.css'
export default class About extends Component {
  render() {
    return (
      <Container text id="about">
        <Header as='h1'>A Little About Us...</Header>
        <div className="ui divider"></div>
        <p>We're a small, family-owned business. Our primary technician is a professional programmer, with decades of experience building
        and repairing computers.
        </p>
      </Container>
    )
  }
}
