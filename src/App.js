import React, {useState, useEffect} from "react";
import UserToDos from "./Components/UserToDos";

// https://jsonplaceholder.typicode.com/users
// directions
// for each user, display their name in h1 tags
// underneath their name, add an h2 tag for "tasks"
// display the user's to do list
// you can get the list by making a call to: https://jsonplaceholder.typicode.com/users/:userId/todos
//
function App() {
  useEffect(()=>{
    async function getUsers(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersFromApi = response.json();
      setUsers(usersFromApi);
    }
    getUsers();
  })
  return (
    <div className="App">
    </div>
  );
}

export default App;
