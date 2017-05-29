import React, {Component} from 'react'
import {  Image, Card } from 'semantic-ui-react'
import './services.css'

const src_one = '../virus_removal.jpg'
const src_two = '../tune_up.png'
const src_three = '../backup.jpg'
const src_four = '../data_xfer.jpg'
const src_five = '../upgrade.jpg'
const src_six = '../custom_build.jpg'
const src_seven = '../software_install.png'
const src_eight = '../website.jpg'
const src_nine = '../phone_crack.jpg'

export default class Services extends Component {
  render() {
    return (
      <div id="services_div">
      <h1>Our rate is $75.00 Per Hour. We offer a FREE diagnostic assessment for all computers. Click any service below for more information!</h1>
      <h3>You can expect your computer back within one business day in most cases! (Sometimes we need to order parts, we'll let ya' know!)</h3> <br />
        <Card.Group itemsPerRow={3}>
          <Card raised
            image={src_one}
            description="Virus Removal"
             />
          <Card raised
            image={src_two}
            description="PC Tune-Up"
           />
           <Card raised
             image={src_three}
             description="Data Backup & Restore"
            />
           <Card raised
              image={src_four}
              description="Data Transfer"
             />
           <Card raised
               image={src_five}
               description="Upgrade Memory & Hard Drive"
              />
            <Card raised
                image={src_six}
                description="Custom Computer Build"
               />
             <Card raised
                 image={src_seven}
                 description="Software Setup & Install"
                />
            <Card raised
                image={src_eight}
                description="Websites for Personal & Small Businesses"
               />
            <Card raised
               image={src_nine}
               description="Cracked Phone Screen Replacement"
              />
        </Card.Group>
      </div>
    )
  }
}
