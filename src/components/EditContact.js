import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const EditContact = ({ contacts, setContacts}) => {
    const [contact, setContact] = useState({});

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

        event.preventDefault()
    }
    return contact?.id ? (
        <div>
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
        </div>
    ) : null
}

export default EditContact
