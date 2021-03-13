import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-area py-3 bg-light">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="logo">
                            <h2>
                                <Link to="/">Contact App</Link>
                            </h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="">
                            <ul className="list-unstyled m-0 d-flex justify-content-end">
                                <li><Link to="/" className="mr-2">Home</Link></li>
                                <li><Link to="/add">Add Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
