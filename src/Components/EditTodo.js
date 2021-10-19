import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router";
import { fetchTodoWithId, updateTodoWithId } from '../actions/listActions';
import './EditTodo.css'

function EditTodo() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const textRef = useRef();
    const state = useSelector(state => state.todoList)
    
    useEffect(() => {

        console.log(history.length, history.location)
        let path = history.location.pathname.split('/');
        let currentId = path[path.length-1];

        dispatch( fetchTodoWithId(currentId) )
        setText(state?.currentTodo?.title);
    },[])

    const handleChange = (event)=>{
        console.log(event.target.value)
        setText(event.target.value);
        
    }

    const handleSave = ()=>{
        let newTodo = {...state.currentTodo, title :textRef.current.innerText }
        // console.log(newTodo, textRef.current.innerText)
        dispatch( updateTodoWithId(newTodo) );
        history.push('/dashboard');
    }

    return (
        <div>
            <h1>Edit</h1>
            <hr/>
            <div className='text-edit-container' >
                <div ref={textRef} contentEditable='true' onChange={handleChange} className='text-edit-div' >{state?.currentTodo?.title}</div>
                <button onClick={handleSave}>SAVE</button>
            </div>
        </div>
    )
}

export default EditTodo
