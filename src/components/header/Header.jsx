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
import { connect } from 'react-redux';

import { fetchCategories } from '../../actions/categories';

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { pathname } = this.props.location;
    const { categories } = this.props;
    const catIds = Object.keys(categories);
    return (
      <Navbar light expand="md" style={styles.container}>
        <NavbarBrand style={styles.brand}>Readable</NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav style={styles.nav} className="ml-auto" navbar>
            {pathname !== '/' && (
              <Link style={styles.link} to="/">
                <NavItem>Home</NavItem>
              </Link>
            )}
            {pathname !== '/add' && (
              <Link style={styles.link} to="/add">
                <NavItem>Add Post</NavItem>
              </Link>
            )}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Subject
              </DropdownToggle>
              <DropdownMenu>
                {catIds.map(id => (
                  <Link key={id} to={`/posts/${categories[id].path}`}>
                    <DropdownItem>{categories[id].name}</DropdownItem>
                  </Link>
                ))}
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
    marginBottom: '1em',
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

const mapState = ({ categories }) => ({
  categories,
});

export default withRouter(connect(mapState)(Header));
