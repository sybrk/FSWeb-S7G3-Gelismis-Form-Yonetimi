
import './App.css'
import { Link, Route, Switch } from 'react-router-dom';
import ValidationForm from "./components/ValidationForm"
import { useEffect, useState } from 'react';
import DataObj from './Data/FormData';
import UserList from './components/Users/UserList';
function App() {

  const [userList, setUserList] = useState([])

  useEffect(() => {

    const getData = async () => {
      const userData = await DataObj.getData(1);
      setUserList(userData.data);
    }
    getData();

  },[])

  return (
  <>
    <div className='nav-container' style={{display:'flex', gap:'10px'}}>
      <Link className="nav-links" to="/">Users</Link>
      <Link className="nav-links" to="/add">Add User</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <UserList userList = {userList} />
      </Route>
      <Route path="/add">
        <ValidationForm />
      </Route>
    </Switch>
    
  </>
    )
}

export default App
