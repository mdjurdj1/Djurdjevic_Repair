import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './navbar.css'

class Navbar extends Component {

 state = {}

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 render() {
   const { activeItem } = this.state

   return (
     <Menu fluid widths={3} id="navbar">
       <Menu.Item
         name='editorials'
         active={activeItem === 'editorials'}
         onClick={this.handleItemClick}
       >
        <span className="nav_text"><i className="home icon"></i>Home</span>
       </Menu.Item>

       <Menu.Item
         name='reviews'
         active={activeItem === 'reviews'}
         onClick={this.handleItemClick}
       >
         <span className="nav_text"><i className="wrench icon"></i>Services</span>
       </Menu.Item>

       <Menu.Item
         name='upcomingEvents'
         active={activeItem === 'upcomingEvents'}
         onClick={this.handleItemClick}
       >
         <span className="nav_text"><i className="newspaper icon"></i>About Us</span>
       </Menu.Item>
     </Menu>
   )
 }
}

export default Navbar;
