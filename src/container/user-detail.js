import React,{Component} from 'react';
import {connect} from 'react-redux';
class UserDetail extends Component {
render(){
  if(this.props.user){
    return (
      <div>
        <h2>年紀:{this.props.user.age}</h2>
        <h2>敘述:{this.props.user.description}</h2>
        <h2></h2>
      </div>
    )
  }
else{
  return  (<div>not have</div>)
}
}
}
function mapStateToProps(state){
  return {
    user:state.activeUsers  //allReducers  reduce/index.js  ->activeUsers:reducer active   user-list被給state

  }
}
export default connect(mapStateToProps)(UserDetail);
