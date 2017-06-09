export default function (state={},{type,payload}){
switch (type) {
  case "USER_SELECTED":
    return payload;
    break;
  default:

}
return state;
}
