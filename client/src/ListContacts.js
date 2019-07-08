import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onRemoveContact: PropTypes.func.isRequired
    };

    state = {
        query: ''
    };

    updateChange = query => {
        this.setState(() => ({
            query: query.trim()
        }));
    };

    render() {
        return (
            <div className='list-contacts'>
                {JSON.stringify(this.state.query)}
                <div className='list-contacts-top'>
                    <input type="text" className='search-contacts' placeholder='Search contacts'
                           value={this.state.query} onChange={event => this.updateChange(event.target.value)}/>
                </div>
                <ol>
                    {this.props.contacts.map(contact => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }}>
                            </div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className='contact-remove'
                                    onClick={() => this.props.onRemoveContact(contact)}>Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default ListContacts;
