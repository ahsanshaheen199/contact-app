import React from 'react'
import { Form } from 'react-bootstrap'

const SearchContact = () => {
    return (
        <Form>
            <Form.Group controlId="searchContact">
                <Form.Control type="email" placeholder="Search contact" />
            </Form.Group>
        </Form>
    )
}

export default SearchContact
