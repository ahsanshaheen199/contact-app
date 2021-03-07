import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <div className="header-area py-3 bg-light">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="logo">
                            <h2>
                                <a href="#!">Contacts</a>
                            </h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="">
                            <ul className="list-unstyled m-0 d-flex justify-content-end">
                                <li><a className="mr-3" href="#!">Home</a></li>
                                <li><a href="#!">Home</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
