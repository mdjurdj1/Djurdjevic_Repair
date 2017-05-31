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
      <h1>Our rate is $75.00 Per Hour. We offer a FREE diagnostic assessment for all computers, just give us a call! </h1>
      <h3>Need In-Home Support? Call and ask to see if you're within our travel range! (Travel Rate is $100/hr)</h3>
      <h3>You can expect your computer back within one business day in most cases! (Sometimes we need to order parts, we'll let ya' know!)</h3> <br />
        <Card.Group itemsPerRow={3}>
          <Card raised
            image={src_one}
            header="Virus Removal"
            description="Popups and Viruses infecting your system? We'll remove them all, and install top-notch security software!"
             />
          <Card raised
            image={src_two}
            header="PC Tune-Up"
            description="Computer running slow? Time for a tune-up. Free up space, update your Operating System, and more!"
           />
           <Card raised
             image={src_three}
             header="Data Backup & Restore"
             description="Everone needs a data backup in case of computer failure! We can also recover lost data."
            />
           <Card raised
              image={src_four}
              header="Data Transfer"
              description="Transfer music, files, and data between computers or from a computer to a phone and vice versa."
             />
           <Card raised
               image={src_five}
               header="Upgrade Memory & Hard Drive"
               description="Upgrading Memory and Hard Drive will PERMANENTLY speed up your computer and increase space!"
              />
            <Card raised
                image={src_six}
                header="Custom Computer Build"
                description="Do your kids love gaming? Let's build them a customized computer with top-of-the-line parts! Perfect for anyone who needs a power PC!"
               />
             <Card raised
                 image={src_seven}
                 header="Software Setup & Install"
                 description="We can install and configure ANY software you might need. No hassle!"
                />
            <Card raised
                image={src_eight}
                header="Websites for Personal & Small Businesses"
                description="Need a website designed for your business? Want to own a custom webpage? We can make it happen!"
               />
            <Card raised
               image={src_nine}
               header="Cracked Phone Screen Replacement"
               description="Don't pay apple $150 to replace a cracked phone screen! We can do it for half the price. Ask for laptop screen replacements!"
              />
        </Card.Group>
      </div>
    )
  }
}
