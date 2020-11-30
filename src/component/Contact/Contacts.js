import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
      <div className="row">
        {this.props.contacts.map((singleContact) => (
          <Contact
            contact={singleContact}
            key={singleContact.id}
            favouriteHandler={this.props.favouriteHandler}
            deletehandler={this.props.deletehandler}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
