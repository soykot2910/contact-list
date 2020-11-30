import React, { Component } from "react";
import { data } from "./../../data";

class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: data.length + 1,
      isFavourite: false,
    };
    data.push(newContact);
    e.target.reset();
    this.props.isForm();
    this.props.reload();
    console.log(data);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
