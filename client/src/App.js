import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import * as ContactAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: []
  };

  async componentDidMount() {
    let contacts = await ContactAPI.getAll();
    this.setState(_ => ({ contacts }));
  }

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(
        currentContact => currentContact.id !== contact.id
      )
    }));

    ContactAPI.remove(contact);
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={_ => (
            <ListContacts
              contacts={this.state.contacts}
              onRemoveContact={this.removeContact}
            />
          )}
        />
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
