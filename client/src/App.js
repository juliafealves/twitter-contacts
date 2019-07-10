import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactAPI from "./utils/ContactsAPI";

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
        <ListContacts
          contacts={this.state.contacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
