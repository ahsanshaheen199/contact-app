import React from 'react'
import Contact from './Contact'
import SearchContact from './SearchContact'

const Contacts = ({ contacts, setContacts, setSelectContact }) => {
    return (
        <>
            <h3 className="text-center">Contacts</h3>
            <SearchContact />
            {
                contacts.map( ( contact ) => {
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
