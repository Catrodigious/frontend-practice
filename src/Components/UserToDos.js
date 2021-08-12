import React, {useState} from "react";

const UserToDos = function({user}){
    const [tasks, setTasks] = useState([]);
  //  const [showTasks, setShowTasks] = useState(false);

    function handleShowTasks(userId){
        async function getTasks(){
            if (tasks.length === 0){
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
                const apiTasks = await response.json();
                setTasks(apiTasks);
            }else{
                setTasks([]);
            }
        }
        getTasks();
    }

    if (tasks.length > 0) console.log("tasks: ", tasks);

    return (
        <div>
            <h1>{user.name}</h1>
            <h2 onClick={()=>handleShowTasks(user.id)}>Tasks</h2>
            <ul>
            {tasks.length > 0 &&
                tasks.map((task)=><li key={task.id}>{task.title}</li>)
            }
            </ul>
        </div>
    )
}

export default UserToDos;