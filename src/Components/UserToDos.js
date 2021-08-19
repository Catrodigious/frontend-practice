import React, {useState, useEffect} from "react";

export default function UserToDos({user, index}){
    const [toDos, setToDos] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(()=>{
        async function getToDos(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`);
            const toDosFromApi = await response.json();
            setToDos(toDosFromApi.splice(0,10));
        }
        getToDos();
    }, []);

    return (
        <div className="container" key={index}>
            <h1>{user.name}</h1>
            <h2 onClick={()=>setDisplay(!display)}>Tasks</h2>
            <ol>
            { display && toDos.map((toDo)=><li key={toDo.id}>{toDo.title}</li>)}
            </ol>
        </div>
    )
}