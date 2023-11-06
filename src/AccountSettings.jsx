import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillCamera } from 'react-icons/ai';

export const AccountSettings = () => {
  return (
    <div className='mainpage '>
      <Container className='p-0 m-0 mx-auto '>
        <Row className='m-0'>
          <Col className='col-12  p-0'>
            <div>
              <h3 className='Accountsettings'>Account Settings</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='pt-1'>
          <Col className='col-3'>
            <div className='imgprofil'>
              <AiFillCamera className='bgicons' />
            </div>
          </Col>
          <Col>
            <p className='m-0 fw-semibold name'>Marry Doe</p>
            <p className='m-0 email'>Marry@Gmail.Com</p>
          </Col>
          <Col className='col-12'>
            <p className='perag'>
               Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
