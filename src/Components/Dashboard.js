import React, { useState } from 'react'
import InputTodoBox from './InputTodoBox';
import ToDoContainer from './ToDoContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../actions/listActions';
import './Dashboard.css'

function Dashboard() {

    const dispatch = useDispatch();

    const state = useSelector( state=>{
        return state.todoList;
    } )

    useEffect(() => {
        dispatch( fetchTodo() );
    }, [])

    useEffect(()=>{
        dispatch( fetchTodo() );
    },[state.list.length])

    return (
        <div>
            <h1>DASHBOARD</h1>
            <hr/>
            <div className='list-container' >
            <InputTodoBox />
            {
                state.isLoading ? <h1>Loading ...</h1> : 
                state.list.map( todo=>{
                    return <ToDoContainer key={todo.id} data={todo} />
                } )
            }
            </div>
        </div>
    )
}

export default Dashboard
