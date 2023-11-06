import { TextField } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export function Createac() {
  return (
    <div className="mainpage">
      <Container>
        <Row className='row topgap'>
          <Col className='col-7'>
            <h2 className='m-0'>Create your PopX account</h2>
          </Col>
          <Col className='col-12'>
            <TextField label="Full Name*" className='textfielddd' />
          </Col>
          <Col className='col-12'>
            <TextField label="Phone Number*" className='textfield' />
          </Col>
          <Col className='col-12'>
            <TextField label="Email address*" className='textfield' />
          </Col>
          <Col className='col-12'>
            <TextField label="Company name*" className='textfield' />
          </Col>
          <Col className='col-12'>
            <TextField label="Password*" className='textfield' />
          </Col>
        </Row>
        <div>
            <p className='m-0 fw-semibold'>Are you an Agency?*</p>
            <Row>
              <Col className='col-2'>
                <div className='d-flex'>
                  <input type="radio" className='me-3' /> Yes
                </div>
              </Col>
              <Col className='col-2'>
                <div className='d-flex'>
                  <input type="radio" className='mx-3 mx-lg-0'/> No
                </div>
              </Col>
            </Row>
        </div>
        <Row>
          <Col className='col-12 btndown'>
            <Link to={'/AccountSettings'} className='btn text-light fw-semibold  w-100  btnstyle'>
                  Create Account
            </Link>
          </Col>
        </Row>
      </Container>
    </div>

  )
}
