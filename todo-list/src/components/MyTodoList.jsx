import React, { useState } from "react"
const MyTodoList=()=>{

    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState({id:'',text:'',completed:false});

        const addTask=()=>{
            if(newTask.trim() !=='')
            {
                setTasks([...tasks,{ id : Date.now(),text:newTask,completed:false}]);
                setNewTask('');
            }

        }
        const toggleTask=(taskId)=>{
           const updatedTasks= tasks.map(task=>{
                task.id===taskId ? {...task,completed:!task.completed}:task
            })

            setTasks(updatedTasks);
        }

    return(
        <>
        <div className="App123">
        <h1>ToDoList </h1>
            <input type="text"
            value={newTask} 
            onChange={(e)=>setNewTask(e.target.value)}
            placeholder="add your task..."
             />
            <button onClick={addTask}>Add</button>
        {
            tasks.map((task)=>{
                const {id}=task;
                <li key={id}>
                    <input type="checkbox"
                     checked={task.checked} 
                     onChange={toggleTask(id)} />

                <span className={task.completed?"completed":""}>{task.text}</span>


                </li>   
            })
        } 



        </div>

        </>
    )



}
export default MyTodoList;