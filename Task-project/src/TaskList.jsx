import React, {useState} from "react";
import TaskCard from "../componet/TaskCard";
import BoxCard from "./BoxCard";


function TaskList  (props,)  {
  const [tasks, setTasks] = useState([
    {id: 5631, name: "Cyber security", completed: true},
    {id: 3452, name: "Advance Javascript", completed: false},
    {id:2133, name: "Adavance Database", completed: false}
   ]);

    const [show, setShow] = useState(true);    

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !==id));
    }
    return(
        <div className="task">
        <ul>
        <h1> Task List </h1 >
            <button className="trigger" onClick={() =>setShow(!show) }>Hide and show</button>
        {show && tasks.map((task, index) =>(
            <TaskCard key={task.id} task = {task} handleDelete ={handleDelete}/>
        ))}
        
        </ul>
      <BoxCard result="success">
        <p className="title">What Is coding</p>
        <p className="discription">Coding involves writing instructions that computers follow to perform tasks, solve problems, or create applications. It translates human logic into machine-readable commands, enabling software functionality and automation.</p>
        </BoxCard>
      <BoxCard result="warning">
        <p className="title">What Is Programing language</p>
        <p className="discription">A programming language is a set of rules for writing code. It defines syntax and semantics to instruct computers on performing tasks.</p>
        </BoxCard>
      <BoxCard result="box alert">
        <p className="title">What Is Bugs In Codding</p>
        <p className="discription">Bugs in coding are errors or flaws that lead to incorrect or unintended behavior in software, disrupting its functionality.</p>
</BoxCard>
       
    </div>
    );
}
export default TaskList;
