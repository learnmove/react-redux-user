import React from 'react';
import UserList from '../container/user-list'
import UserDetail from '../container/user-detail'
const App=()=>(
<div>
<h2>username list:</h2>
  <UserList></UserList>
<hr/>
<h2>user details</h2>
<UserDetail></UserDetail>
</div>
)
export default App;
