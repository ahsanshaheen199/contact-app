import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContactContext } from  '../contexts/Contact.context'

const Contact = ({contact}) => {
    const { dispatch } = useContext( ContactContext )
    const [toggleContactData, setToggleContactData] = useState(false)

    const toggleContact = () => {
        setToggleContactData( ( toggleContactData ) => {
            return ! toggleContactData
        } )
    }

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id })
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
                            <Link to={`contact/edit/${contact.id}`} className="btn btn-primary mr-1">Edit</Link>
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
