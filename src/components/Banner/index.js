import React, {Component} from 'react'
import { Segment, Divider, Image } from 'semantic-ui-react'
import './banner.css'

export default class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div className="ui grid">

        <div className="three wide column" />

          <Image src='../Logo.png' size="large" id="company_logo"/>

          <div className="four wide column" id="contact_info">
              <h1>Contact Us!</h1>
              <p className="contact_text">(718)-662-6765 <i className="phone icon"></i></p>
              <p className="contact_text">mdjurdj1@gmail.com <i className="mail outline icon"></i></p>
              <p>57 Hemlock St., Valatie, NY 12184</p>
          </div>

        </div>
      </div>
    )
  }
}
