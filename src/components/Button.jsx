import React from 'react'
import './Button.css'
import { Col, Row } from 'react-bootstrap'
const Button = () => {
  return (
    <div className='Button'>
        <Row>
            <Col lg={8} md={6} sm={4}>
                <div className="col1">
                    <Row>
                        <Col lg={4} md={6}>
                        <div className="col4"></div>
                        </Col>
                        <Col lg={4} md={6}> 
                        <div className="col5"></div>
                        </Col>
                        <Col lg={4} md={6}> 
                        <div className="col7"></div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} sm={4}>
                <div className="col2"></div>
            </Col>
            {/* <Col lg={4} md={6} sm={4}>
                <div className="col3"></div>
            </Col> */}
           
        </Row>
    </div>
  )
}

export default Button