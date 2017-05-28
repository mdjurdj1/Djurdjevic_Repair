import React, {Component} from 'react'
import { Segment, Divider, Image } from 'semantic-ui-react'
// import logo from './repair_logo.png'

export default class banner extends Component {
  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="four wide column">
          <Segment.Group horizontal>
            <Segment><Image src='../repair_logo.png' size='small' /></Segment>
            <Segment>Djurdjevic</Segment>
            <Segment>Right</Segment>
          </Segment.Group>
            </div>
        </div>
      </div>
    )
  }
}
