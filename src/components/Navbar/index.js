import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import './navbar.css'


class Navbar extends Component {

 state = {}

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 componentDidMount() {
   let arr = this.props.location.pathname.split("")
   arr.splice(0, 1)
   let location = arr.join("")

   this.setState({
     activeItem: location ? location : "home"
   })
 }

 render() {
   const { activeItem } = this.state

   return (
     <Menu fluid widths={6} id="navbar">
       <Menu.Item />
       <Menu.Item href="/"
         name='home'
         active={activeItem === 'home'}
         onClick={this.handleItemClick}
       >
       <span className="nav_text"><i className="home icon"></i>Home</span>
       </Menu.Item>

       <Menu.Item href="/services"
         name='services'
         active={activeItem === 'services'}
         onClick={this.handleItemClick}
       >
         <span className="nav_text"><i className="laptop icon"></i>Services</span>
       </Menu.Item>

       <Menu.Item href="/about"
         name='about'
         active={activeItem === 'about'}
         onClick={this.handleItemClick}
       >
         <span className="nav_text"><i className="newspaper icon"></i>About Us</span>
       </Menu.Item>
       <Menu.Item href="/contact"
         name='contact'
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
