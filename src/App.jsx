import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='mainpage'>
      <Container>
        <div className='topheight'></div>
        <Row className='row'>
          <Col className='col-12 mb-2'>
            <h2 className='heding m-0'>
              Welcome to PopX
            </h2>
          </Col>
          <Col className='col-12'>
            <p className='m-0 dummypra'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </Col>
          <Col className='col-12'>
            <Link to={'/createac'} className='btn text-light fw-semibold  w-100  btnstyle'>
              Create Account
            </Link>
          </Col>
          <Col className='col-12'>
            <Link to={'/Signin'} className='btn w-100 fw-semibold btnRegistered'>
              Already Registered? Login
            </Link>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
