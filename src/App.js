import React from "react";
import Contacts from "./component/Contact/Contacts";
import "./App.css";
import { data } from "./data";
import Form from "./component/Form/Form";

class App extends React.Component {
  state = {
    contacts: [],
    isForm: false,
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await data;
      this.setState({
        contacts: res,
      });
    };
    fetchData();
  }

  reload = () => {
    const fetchData = async () => {
      const res = await data;
      this.setState({
        contacts: res,
      });
    };
    fetchData();
  };

  deleteHandler = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];

    contacts.splice(index, 1);
    this.setState({
      contacts,
    });
  };

  changeFavouriteHandler = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];
    contacts[index].isFavourite = !contacts[index].isFavourite;
    this.setState({
      contacts: this.state.contacts,
    });
  };

  isFormHandler = () => {
    this.setState({
      isForm: !this.state.isForm,
    });
  };

  render() {
    return (
      <div className="contactAppWrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.isFormHandler}
              >
                Create Contact
              </button>
              {this.state.isForm ? (
                <Form
                  reload={this.reload}
                  isForm={this.isFormHandler.bind(this)}
                />
              ) : null}
            </div>
          </div>
          <h1>Contact List Single Page Application</h1>
          <Contacts
            contacts={this.state.contacts}
            favouriteHandler={this.changeFavouriteHandler.bind(this)}
            deletehandler={this.deleteHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
