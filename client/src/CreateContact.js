import React, { Component } from "react";
import { Link } from "react-router-dom";
import formSerialize from "form-serialize";
import ImageInput from "./ImageInput";

class CreateContact extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const values = formSerialize(event.target, { hash: true });

    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
    }
  };

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
