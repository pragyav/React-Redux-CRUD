import React, { Component } from 'react';
import { connect } from "react-redux";

class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:"",
      lastName:""     
    };    
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "") {
      return;
    }
    this.props.addUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      isEdit: false,
      fullName: `${this.state.firstName} ${this.state.lastName}`
    });    
    this.setState({ firstName: "", lastName: "" });
  }; 

  render() {    
    return (
      <div className="container">
        <h2>Registration Form</h2>
        <hr/>        
          <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="firstName">First Name:</label>
            </div>
            <div className="col-75">
              <input
                id="firstName"
                value={this.state.firstName}
                name="firstName"
                type="text"
                onChange={(e) => this.setState({ firstName: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lastName">Last Name:</label>
            </div>
            <div className="col-75">
              <input
                id="lastName"
                value={this.state.lastName}
                name="lastName"
                type="text"
                onChange={(e) => this.setState({ lastName: e.target.value })} />
            </div>
          </div>
          <button type="submit">Add user</button>
          </form>    
        </div>     
    )
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    addUser: (user)=> dispatch({type:"ADD_USER", user})
  }
}

export default connect(null, mapDispatchToProps) (UserForm);