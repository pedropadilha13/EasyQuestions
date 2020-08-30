import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import GoogleAuth from '../components/GoogleAuth';

class Home extends React.Component {
  renderMessage() {
    switch (this.props.auth.isSignedIn) {
      case true:
        return (
          <div className='m-auto w-auto'>
            <Button as={Link} variant='primary' size='lg' to='profile'>
              Criar novo Set
            </Button>
          </div>
        );
      case false:
        return (
          <div className='m-auto w-auto'>
            <h3>Comece agora mesmo!</h3>
            <GoogleAuth className='m-auto' />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <Container className='mt-7 w-100'>
        <Row className='w-100'>
          <Col sm={12} className='text-center'>
            <div className='titleDesc'>
              <h1 className='text-primary'>EasyQuestions</h1>
              <p className='text-secondary'>
                Perguntas e Respostas de maneira interativa e fácil!
              </p>
            </div>
          </Col>
        </Row>
        <Row className='w-100 mt-7'>
          <Col sm={12} className='d-flex align-content-around'>
            {this.renderMessage()}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Home);
