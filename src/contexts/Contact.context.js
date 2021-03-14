import React, { createContext, useReducer } from 'react'
export const ContactContext = createContext();

const initialState = {
  contacts : [
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
  ]
};

const contactReducer = ( state, action ) => {
  switch( action.type ) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [
          action.payload,
          ...state.contacts
        ]
      }
    case 'EDIT_CONTACT':
      const EditContacts = state.contacts.map( (contactItem) => {
        return contactItem.id === action.payload.id ? action.payload : contactItem
      } )
      
      return {
        ...state,
        contacts: [
          ...EditContacts
        ]
      }
    case 'DELETE_CONTACT':
      const filterContacts = state.contacts.filter( (contactItem) => {
        return contactItem.id !== action.payload
      } )

      return {
        ...state,
        contacts: [
          ...filterContacts
        ]
      }
    default: 
      return state
  }
}

const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState)
    return (
        <ContactContext.Provider value={ { state, dispatch } }>
            { children }
        </ContactContext.Provider>
    )
}

export default ContactProvider
