import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Contacts from './components/Contacts';
import Header from './components/Header';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'Ahsan',
      lastName: 'Habib',
      email: 'test@test.com',
      profession: 'WordPress Developer',
      contactType: 'personal',
    },
    {
      id: 2,
      firstName: 'Asaduzzaman',
      lastName: 'Shameem',
      email: 'test@test.com',
      profession: 'Service Holder',
      contactType: 'professional',
    }
  ])
  return (
      <>
        <Header />
        
        <Route path="/" exact render={ (props) =>  
          <Contacts 
            contacts={contacts} 
            setContacts={setContacts}
            {...props} 
          />
        } />
        
        <Route path="/add" render={ (props) =>  
            <AddContact 
              setContacts={setContacts} 
              contacts={contacts}
              {...props}
            /> 
          } />

        <Route path="/contact/edit/:id" render={ (props) => (
            <EditContact 
              setContacts={setContacts} 
              contacts={contacts}
              {...props}
            />
          ) } />
      </>
  );
}

export default App;
