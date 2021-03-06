import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'
import './banner.css'

export default class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div className="ui grid">

        <div className="three wide column" />

          <Image src='../Logo.png' size="big" id="company_logo"/>

          <div className="four wide column" id="contact_info">
              <h1>Contact Us!</h1>
              <p className="contact_text">(518)-610-8190 <i className="phone icon"></i></p>
              <p className="contact_text">mdjurdj1@gmail.com <i className="mail outline icon"></i></p>
              <p id="contact_address">57 Hemlock St., Valatie, NY 12184</p>
              <p id="espanol">Se Habla Español!</p>
          </div>

        </div>
      </div>
    )
  }
}
