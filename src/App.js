import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch  } from 'react-router-dom';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Contacts from './components/Contacts';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Contacts} />
        
        <Route path="/add" component={AddContact} />

        <Route path="/contact/edit/:contactId" component={EditContact} />

        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
