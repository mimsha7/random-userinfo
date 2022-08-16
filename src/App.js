import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import data from './data/data.json';
import Users from './Users/Users';
import Suser from './Suser/Suser';

function App() {
  const [user, setUser] = useState([]);
  const [suser, setSuser] = useState([]);
  const handleAdUser = (user) =>{
    const newUser = [...suser, user];
    setSuser(newUser);
  }

  useEffect(() => {
    setUser(data);
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Suser suser={suser}></Suser>
      <ul>
        {
          user.map((user) => <Users user={user} key={user.id} handleAdUser={handleAdUser}> </Users>)
        }
      </ul>
    </div>
  );
}

export default App;
