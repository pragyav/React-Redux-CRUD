import React from 'react'
import { connect } from 'react-redux';

class User extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fullName: this.props.user.fullName
    }
  }

  removeUser=(index)=>{
    this.props.removeUser(index)
  }

  onEdit=(index)=>{
    this.props.editUser(index, this.state.fullName)
  }

  render () {
    const fullName =  !this.props.user.isEdit
     ?
     this.props.user.fullName
     :
     <input onChange={(e)=>this.setState({fullName: e.target.value})} value={this.state.fullName}/>

     return(
       <li
      key= {this.props.index} className="flex-center" >
      {fullName}
      <span>
        <i class="fa fa-pencil-square-o" aria-hidden="true"
          onClick={()=>this.onEdit(this.props.index)}></i>
        <i
        class="fa fa-trash-o" aria-hidden="true"
        onClick={()=>this.removeUser(this.props.index)}></i>
      </span>
      </li>
     )
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    removeUser: (index)=>{
      dispatch({type: "REMOVE_USER", index})
    },
    editUser:(indexToChange, fullName)=>{
      dispatch({type: "EDIT_USER", indexToChange, fullName })
    }
  }
}

export default  connect(null,mapDispatchToProps)(User);