import React, { useState, useContext } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { ContactContext } from '../contexts/Contact.context'
import { useHistory } from 'react-router-dom'

const AddContact = () => {
    const { dispatch } = useContext(ContactContext)
    const history = useHistory()

    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        contactType: 'personal',
    });

    const changeContactData = ( event ) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    }

    const contactData = (event) => {
        fetch('http://localhost:5000/contacts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        })
        .then( res => res.json())
        .then( serverContact =>  dispatch({ type: 'ADD_CONTACT', payload: serverContact }) )
        .catch( error => console.error('Error:', error) )

        history.push('/')

        event.preventDefault()
    }
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <h3>Contact Form</h3>
                    <Form onSubmit={contactData} className="mt-4">
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName" onChange={changeContactData} value={contact.firstName} type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastName" onChange={changeContactData} value={contact.lastName} type="text" placeholder="Enter Last Name" />
                        </Form.Group>

                        <Form.Group controlId="emailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control name="email"  onChange={changeContactData} value={contact.email} type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group controlId="profession">
                            <Form.Label>Profession</Form.Label>
                            <Form.Control name="profession" onChange={changeContactData} value={contact.profession}  type="text" placeholder="Enter Profession" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="d-block">Contact Type</Form.Label>
                            <Form.Check inline name="contactType" checked={contact.contactType === 'personal'} onChange={changeContactData} type="radio" value="personal" label="Personal" />
                            <Form.Check inline name="contactType" checked={contact.contactType === 'professional'}  onChange={changeContactData} type="radio" value="professional" label="Professional" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddContact
