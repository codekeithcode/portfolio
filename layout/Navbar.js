import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
} from 'reactstrap';
import {GoHome, GoInfo} from "react-icons/go";
import MyLogo from "../public/mylogo"



const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" dark expand="md">
        <NavbarBrand href="/"><MyLogo /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar  style={{ fontWeight: "600", fontSize: "1.2rem"}} >
            <NavItem >
              <NavLink href="/"><GoHome />&nbsp; Home</NavLink>
            </NavItem>         
            <NavItem>
              <NavLink href="/about"><GoInfo />&nbsp; About</NavLink>
            </NavItem>      
          </Nav>          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;