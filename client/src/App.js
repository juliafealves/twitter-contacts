import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactAPI from "./utils/ContactsAPI";
import CreactContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: [],
    screen: "list"
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
        {this.state.screen === "list" && (
          <ListContacts
            contacts={this.state.contacts}
            onRemoveContact={this.removeContact}
          />
        )}
        {this.state.screen === "create" && <CreactContact />}
      </div>
    );
  }
}

export default App;
