import React, {Component} from 'react'
import { Container, Header, Image, Grid } from 'semantic-ui-react'
import './about.css'
export default class About extends Component {
  render() {
    return (
      <Container text id="about">
        <Header as='h1' id="about_header">A Little About Us...</Header>
        <div className="ui divider"></div>
        <p className="about_text">We're a small, family-owned business in the beautiful village of Kinderhook. Our primary technician is a professional programmer, with decades of experience building
        and repairing computers. In addition to fixing computers, laptops, and phones - we also have experience building websites for individuals and small businesses.
        </p>
          <Image src='../location.jpg' size="huge" /> <br />
        <p className="about_text">We're located right off route 9, nearby the shopping plaza. You can expect quality service with a great turnaround!
        Call and ask about any problems you might be having, and we'll do our absolute best to fix them!
        </p>
      </Container>
    )
  }
}
