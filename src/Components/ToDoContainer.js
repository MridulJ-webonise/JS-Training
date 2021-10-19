import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { deleteTodo } from '../actions/listActions';
import './todoContainer.css';

function ToDoContainer({data}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector( state=>{
        return state
    } )
    const handleDelete = ()=>{
        dispatch( deleteTodo(data.id));
    }
    
    const handleEdit = ()=>{
        history.push('/edit/'+data.id);
    }

    return (
        <div className='todo-container' >
            <div style={ {'width':'70%'} } >
                {data.title}
            </div>
            <button onClick={handleEdit} >EDIT</button>
            <button onClick={handleDelete} >DELETE</button>
        </div>
    )
}

export default ToDoContainer
