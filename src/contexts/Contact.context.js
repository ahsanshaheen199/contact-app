import React, { createContext, useState } from 'react'
export const ContactContext = createContext(); 

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        {
          id: '1',
          firstName: 'Ahsan',
          lastName: 'Habib',
          email: 'test@test.com',
          profession: 'WordPress Developer',
          contactType: 'personal',
        },
        {
          id: '2',
          firstName: 'Asaduzzaman',
          lastName: 'Shameem',
          email: 'test@test.com',
          profession: 'Service Holder',
          contactType: 'professional',
        }
      ])
    return (
        <ContactContext.Provider value={ { contacts, setContacts } }>
            { children }
        </ContactContext.Provider>
    )
}

export default ContactProvider
