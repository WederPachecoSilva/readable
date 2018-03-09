// @ts-check

import React from 'react';
import {
  NavbarToggler,
  Navbar,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Collapse,
  Nav,
  DropdownItem,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <Navbar light expand="md" style={styles.container}>
        <NavbarBrand style={styles.brand}>Readable</NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav style={styles.nav} className="ml-auto" navbar>
            <Link style={styles.link} to="/">
              <NavItem>Home</NavItem>
            </Link>
            <Link style={styles.link} to="/add">
              <NavItem>Login</NavItem>
            </Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Subject
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>React</DropdownItem>
                <DropdownItem>React Native</DropdownItem>
                <DropdownItem>Redux</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const styles = {
  container: {
    background: 'linear-gradient(to right, lightBlue, white)',
    borderBottom: '0.5px black solid',
  },
  brand: {
    marginLeft: '4em',
    color: 'grey',
  },
  nav: {
    marginRight: '5em',
  },
  link: {
    color: 'grey',
    margin: 'auto 1em',
  },
};

export default withRouter(Header);
