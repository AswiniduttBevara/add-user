import React, {useState}  from 'react';
import AddUsers from './Components/USERS/AddUsers';
import UsersList from './Components/USERS/UsersList';


function App() {
  const[userEntered, setUserEntered] = useState([]);
  const userAddHandler = (uName, uAge) => {
    setUserEntered((prevUserData) => {
      return [...prevUserData, {user:uName, age:uAge, id:Math.random().toString()}]
    })
  }
  return (
    <>   
      <AddUsers onAddUser={userAddHandler} />
      <UsersList users={userEntered} />
    </>
  );
}

export default App;
