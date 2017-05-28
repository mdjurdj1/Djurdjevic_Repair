import React, {Component} from 'react'
import { Segment, Divider, Image } from 'semantic-ui-react'
import './banner.css'

export default class banner extends Component {
  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="six wide column" id="company_logo">
              <Image src='../Logo.png' />
            </div>
        </div>
      </div>
    )
  }
}
