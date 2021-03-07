import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const Contact = ({contact, contacts, setContacts, setSelectContact}) => {

    const [toggleContactData, setToggleContactData] = useState(false)

    const selectContact = ( id ) => {
        const foundContact = contacts.find( ( contact ) => {
            return contact.id === id
        } )
        setSelectContact(foundContact)
    }

    const toggleContact = () => {
        setToggleContactData( ( toggleContactData ) => {
            return ! toggleContactData
        } )
    }

    const deleteContact = (id) => {
        const filterContacts = contacts.filter( (contactItem) => {
            return contactItem.id !== id
        } )

        setContacts([
            ...filterContacts
        ])
    }
    return (
        <>
            <Card className="mb-2">
                <Card.Header as="h5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            {`${contact.firstName} ${contact.lastName}`} 
                        </div>
                        <div>
                            <Button className="mr-1" onClick={toggleContact}>Toggle</Button>
                            <Button className="mr-1" onClick={() => selectContact(contact.id)}>Edit</Button>
                            <Button onClick={() => deleteContact(contact.id)}>X</Button>
                        </div>
                    </div>

                </Card.Header>

                {
                    toggleContactData && (
                        <Card.Body>
                            <Card.Title>{contact.email}</Card.Title>
                            <Card.Text>
                                {contact.profession}
                            </Card.Text>
                        </Card.Body>
                    )
                }
            </Card>
        </>
    )
}

export default Contact;
