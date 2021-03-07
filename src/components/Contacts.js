import React, { useState } from 'react'
import Contact from './Contact'
import SearchContact from './SearchContact'

const Contacts = ({ contacts, setContacts, setSelectContact }) => {
    const [searchText, setSearchText] = useState('');

    const filteredContacts = contacts.filter( contactItem => contactItem.firstName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || contactItem.lastName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
    );

    return (
        <>
            <h3 className="text-center">Contacts</h3>
            <SearchContact searchText={searchText} setSearchText={setSearchText} />
            {
                filteredContacts.map( ( contact ) => {
                    return (
                        <Contact 
                            key={contact.id} 
                            contact={contact}
                            contacts={contacts}
                            setContacts={setContacts}
                            setSelectContact={setSelectContact}
                        />
                    )
                } )
            }
        </>
    )
}

export default Contacts;
