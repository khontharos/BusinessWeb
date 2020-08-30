/*
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/"> หน้าหลัก </Link>
                <Link to="/about"> เกี่ยวกับเรา </Link> 
                <Link to="/contact"> ติดต่อเรา </Link> 
                <Link to="/products"> สินค้า </Link> 
                <Link to="/profile"> ข้อมูลส่วนตัว </Link> 
            </div>
        )
    }
}
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand tag={Link} to="/">Khontharos</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/About/">เกี่ยวกับเรา</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Contact">ติดต่อเรา</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Product">สินค้า</NavLink>
            </NavItem>
          </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
        <NavLink tag={Link} to="/Profile">ข้อมูลส่วนตัว</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}to="/login">เข้าสู่ระบบ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}to="/register">สมัครสมาชิก</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;