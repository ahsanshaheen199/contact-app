import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Contact from './Contact'
import SearchContact from './SearchContact'
const Contacts = ({ contacts, setContacts }) => {
    const [searchText, setSearchText] = useState('');

    const filteredContacts = contacts.filter( contactItem => 
        contactItem.firstName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || contactItem.lastName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
    );

    return (
        <>
            <Container className="py-4">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h3 className="text-center">Contacts</h3>
                        <SearchContact 
                            searchText={searchText} 
                            setSearchText={setSearchText} 
                        />
                        {
                            filteredContacts.map( ( contact ) => {
                                return (
                                    <Contact 
                                        key={contact.id} 
                                        contact={contact}
                                        contacts={contacts}
                                        setContacts={setContacts}
                                    />
                                )
                            } )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contacts;
