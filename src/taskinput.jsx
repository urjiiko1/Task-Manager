import { useState,useContext, useRef, useEffect } from "react";

export default function TaskInput() {
    const {dispatch} = useContext(taskcontext);
    const[text, setText]=useState("");
    const inputRef=useRef();

    useEffect( ()=>{
        inputRef.current.focus();
    }, []  ) ;

    const addTask=()=>{
        if (text.trim()) {
            dispatch({type:"add",payload:text});
            setText("");
            inputRef.current.focus();
        }
    };

    return (
        <div className="task-input">
            <input ref={inputRef} type="text" value={text} 
            onChange={e =>setText(e.target.value)} placeholder="Enter a new task" className="task-input-field"/>
            <button onClick={addTask} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
        </div>
    )
}