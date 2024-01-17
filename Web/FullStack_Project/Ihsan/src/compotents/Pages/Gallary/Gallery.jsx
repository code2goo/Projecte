import React from 'react'
import MainGallary from '../Home/Main/MainGallary';

import {Container, Row} from 'react-bootstrap';


const Gallary = () => {
  return (
    <Container className='d-grid justify-content-center text-center mt-5'>
    <Row className='text-center d-flex justify-content-center'>
        <MainGallary /><MainGallary /><MainGallary />
    </Row>
    <Row className='text-center d-flex justify-content-center'>
        <MainGallary /><MainGallary /><MainGallary />
    </Row>
    <Row className='text-center d-flex justify-content-center'>
        <MainGallary /><MainGallary /><MainGallary />
    </Row>
    <Row className='text-center d-flex justify-content-center'>
        <MainGallary /><MainGallary /><MainGallary />
    </Row>
    </Container>
  )
}

export default Gallary

