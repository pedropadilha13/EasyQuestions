import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { fetchCurrentUser, signOut } from '../../actions';

class Header extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  renderRightNav() {
    switch (this.props.auth.isSignedIn) {
      case true:
        return (
          <Nav>
            <NavDropdown
              title={
                <>
                  <Image
                    src={this.props.auth.picture}
                    className='navbar-avatar'
                  />
                  &nbsp;
                  <span>{this.props.auth.firstName}</span>
                </>
              }
              id='profile-dropdown'
              alignRight
            >
              <NavDropdown.Item as={Link} to='/profile'>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/dashboard'>
                Dashboard
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Button}
                onClick={() => this.props.signOut()}
              >
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        );
      case false:
        return <GoogleAuth />;
      default:
        return null;
    }
  }

  render() {
    console.log(this.props);
    return (
      <Navbar bg='light' variant='light' sticky='top' className='p-0'>
        <Navbar.Brand>
          <Link to='/' className='nav-link'>
            EasyQuestions
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='mr-auto'>
            <Nav.Link href='#' target='_blank' rel='noopener noreferrer'>
              Link somewhere
            </Nav.Link>
          </Nav>
          {this.renderRightNav()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, {
  fetchCurrentUser,
  signOut
})(Header);
