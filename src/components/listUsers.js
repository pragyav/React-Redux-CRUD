import React from 'react'
import { connect } from 'react-redux';
import User from './user'

const ListUsers =(props)=> {
  const List = props.users.map((user, i) =>
    <User user={user} key={i} index={i} />)

  return(
    <div className="container">           
        <h2>Registered Users</h2>       
        <hr/>
        <ul>
          {List}
        </ul>
    </div>
  ) 
}

const mapStateToProps =(state)=>{
  return {
    users: state.users
  }
}

export default connect (mapStateToProps)(ListUsers);