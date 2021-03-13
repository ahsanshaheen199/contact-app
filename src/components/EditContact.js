import React, { useEffect, useState, useContext } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { ContactContext } from '../contexts/Contact.context'

const EditContact = () => {
    const [contact, setContact] = useState({});

    let { contactId } = useParams()
    const history = useHistory()
    const { contacts, setContacts } = useContext(ContactContext)

    useEffect( () => {
        let selectContact = contacts.find( contactItem => {
            return contactItem.id === contactId
        })
        
        if( selectContact ) {
            setContact(selectContact);
        }
    }, [contacts,contactId] )

    const changeContactData = ( event ) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    }

    const contactData = (event) => {

        setContacts([
            ...contacts.map( contactItem => {
                return contactItem.id === contact.id  ? contact : contactItem
            } )
        ])

        history.push('/')

        event.preventDefault()
    }
    return contact?.id ? (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <h3>Edit Contact Form</h3>
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
        
    ) : <h2>No Contact Found</h2>
}

export default EditContact
