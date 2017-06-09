export const selectuser=(user)=>{
  console.log("you click",user.first);
  return {
    type:"USER_SELECTED",
    payload:user
  }
}
