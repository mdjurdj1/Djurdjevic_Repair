import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import './navbar.css'


class Navbar extends Component {

 state = {}

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 render() {
   const { activeItem } = this.state

   return (
     <Menu fluid widths={6} id="navbar">
       <Menu.Item />
       <Menu.Item href="/"
         name='editorials'
         active={activeItem === 'editorials'}
         onClick={this.handleItemClick}
       >
       <span className="nav_text"><i className="home icon"></i>Home</span>
       </Menu.Item>

       <Menu.Item href="/services"
         name='reviews'
         active={activeItem === 'reviews'}
         onClick={this.handleItemClick}
       >
         <span className="nav_text"><i className="laptop icon"></i>Services</span>
       </Menu.Item>

       <Menu.Item href="/about"
         name='upcomingEvents'
         active={activeItem === 'upcomingEvents'}
         onClick={this.handleItemClick}
       >
         <span className="nav_text"><i className="newspaper icon"></i>About Us</span>
       </Menu.Item>
       <Menu.Item href="/contact"
         name='editorials'
         active={activeItem === 'contact'}
         onClick={this.handleItemClick}
       >
       <span className="nav_text"><i className="mail outline icon"></i>Contact</span>
       </Menu.Item>
        <Menu.Item />
     </Menu>
   )
 }
}

export default Navbar;
