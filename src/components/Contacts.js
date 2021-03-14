import React, { useState, useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Contact from './Contact'
import SearchContact from './SearchContact'
import { ContactContext } from '../contexts/Contact.context'

const Contacts = () => {
    const { state, dispatch } = useContext(ContactContext)
    
    useEffect(() => {
        dispatch({ type: 'IS_LOADING', payload: true})
        fetch('http://localhost:5000/contacts')
        .then( res => res.json())
        .then( contacts => {
            dispatch({ type: 'ADDING_CONTACTS', payload: contacts})
            dispatch({ type: 'IS_LOADING', payload: false})
        } )
    }, [])

    const [searchText, setSearchText] = useState('')

    const { contacts, isLoading } = state

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
                            isLoading ? 
                            <h2>Loading...</h2> :
                            filteredContacts.map( ( contact ) => {
                                return (
                                    <Contact 
                                        key={contact.id} 
                                        contact={contact}
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
