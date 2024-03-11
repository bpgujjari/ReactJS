import { useState } from "react";

const TodoList1=()=>{


   
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');

    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
      }
    };

    const deleteTask=(id)=>{

    }
    const toggleTask=(taskId)=>{
      const updatedTasks=tasks.map(task=>
        task.id===taskId ? {...task, completed: !task.completed} : task
        );
        setTasks(updatedTasks);
    };


    return(
        <div>

            <div>
            <input type="text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}/>
            <button onClick={addTask} >Add</button>
            </div>


            <div>
                <ul>
                {tasks.map(task => (
                <li key={task.id}>
              <input type="checkbox" checked={task.completed} onChange={toggleTask(task.id)} />
               {task.text}
            </li>
        ))}   
                </ul>    
            </div>           
           



        </div>
    )
}
export default TodoList1;