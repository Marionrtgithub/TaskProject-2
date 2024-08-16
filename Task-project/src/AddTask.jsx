import React, { useState,useRef } from 'react';
import './AddTask.css';
function AddTask  ()  {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState("false");
    const taskref = useRef("");
    function handleChange(event){
       // setTaskValue (event.target.value);
       console.log(taskref.current.value)
    }
    function handleReset(){
        //setTaskValue("");
        setTaskValue(false)
        taskref.current.value="";
    }
    function handleSubmit(event){
        event.preventDeafault();
        const task ={
            id: Math.floor(Math.random() * 10000),
            name: abc,
            completed: Boolean(progress) ,
        }

    } 
    return <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input  type="text" name='task' id='task' placeholder='task name' autoComplete='off ' ref={taskref} />
            <select onChange={(event)=>setProgress(event.value.target) } value={progress}>
                <option value={true}>pedding</option>
                <option value={false}>completed</option>
            </select>
            <span onClick={handleReset} className='reset'>Reset</span>
            <button type='submit'>Add Task  </button>
            
        </form>
        <p>{taskref.current.value}</p>
    </section>;
}


export default AddTask;
