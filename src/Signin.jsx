import { TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export  function Signin() {
  return (
    <div className='mainpage'>
        <Container>
            <Row>
                <Col className='col-8 col-lg-12'>
                    <h2 className='signin'>
                       Signin to your PopX account
                    </h2>
                </Col>
                <Col className='col-7 col-lg-12'>
                    <p className='peragraf'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </Col>
                <Col className='col-12'>
                  <TextField label="Email address*" className='textinput' />
                </Col>
                <Col className='col-12'>
                  <TextField label="Password*" className='textinput' />
                </Col>
                <Col className='col-12'>
                    <Link to={'/AccountSettings'} className='btn text-light fw-semibold  w-100  btnstyle'>
                    Login
                    </Link>
                </Col>
            </Row>
    </Container>
    </div>
  )
}
