import React from 'react'
import { Form } from 'react-bootstrap'

const SearchContact = ({ searchText, setSearchText }) => {
    const searchData = (event) => {
        setSearchText(event.target.value)
    }
    return (
        <Form>
            <Form.Group controlId="searchContact">
                <Form.Control type="email" value={searchText} onChange={searchData} placeholder="Search contact" />
            </Form.Group>
        </Form>
    )
}

export default SearchContact
