import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Contacts from './components/Contacts';
import Header from './components/Header';

function App() {
  const [selectContact, setSelectContact] = useState(null)
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
    <div>
      <>
        <Header />

        <Container className="py-4">
          <Row>
            <Col lg={4}>
              {
                selectContact ? 
                  <EditContact 
                    setContacts={setContacts} 
                    contacts={contacts} 
                    selectContact={selectContact} 
                    setSelectContact={setSelectContact}
                    />
                : <AddContact setContacts={setContacts} contacts={contacts} />
              }
            </Col>
            <Col lg={8}>
              <Contacts contacts={contacts} setContacts={setContacts} setSelectContact={setSelectContact} />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
