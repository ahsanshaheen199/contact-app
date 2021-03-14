import React, { createContext, useReducer } from 'react'
export const ContactContext = createContext();

const initialState = {
  contacts : [],
  isLoading: false
};

const contactReducer = ( state, action ) => {
  switch( action.type ) {
    case 'IS_LOADING': 
      return {
        ...state,
        isLoading: action.payload
      }
    case 'ADDING_CONTACTS':
      return {
        ...state,
        contacts: [
          ...action.payload
        ]
      }
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
