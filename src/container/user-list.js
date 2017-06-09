import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectuser} from '../actions/index';
class UserList extends Component{

  createListItem(){
    return this.props.users.map((user)=>{
      return (<li
        key={user.id}
        onClick={()=>this.props.selectuser(user)}  /*action/index.js export const selectuser*/
        >{user.first}</li>)
    })
  }
  render(){
    return (
      <ul>
      {this.createListItem()}

      </ul>
    )
  }
}
function mapStateToProps(state){
  return {
    users:state.userss
  }
}
function matchDispatchtoProps(dispatch){
  return bindActionCreators({selectuser:selectuser},dispatch);
}
export default connect(mapStateToProps,matchDispatchtoProps)(UserList);
