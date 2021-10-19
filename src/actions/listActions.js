
export const fetchTodo = ()=>{
    return function(dispatch){
        dispatch(setLoading(true));
        fetch('http://localhost:3000/todo')
        .then( response => response.json() )
        .then( data=> {
            dispatch( setTodo(data) );
            dispatch(setLoading(false));
        } );
    }
}

export const setTodo = (data=null)=>{
    if(data)
    {
        return{
            type : 'Set_todo',
            payload : data
        }
    }
}

export const fetchTodoWithId = (id)=>{

    return function(dispatch){
        dispatch(setLoading(true));
        fetch('http://localhost:3000/todo/'+id)
        .then( response => {
                                return response.json();
                            } )
        .then( data=>{
            dispatch(setTodoWithId(data));
            dispatch(setLoading(false));
        } )
    }
}

export const setTodoWithId= (data)=>{
    return{
        type: 'Set_todo_with_id',
        payload: data
    }
}

export const updateTodoWithId = (data)=>{
    return function(dispatch){
        fetch('http://localhost:3000/todo/'+data.id,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( dispatch(fetchTodo()) )
    }
}

export const addTodo = (data=null)=>{
    return function(dispatch){
        
        fetch('http://localhost:3000/todo',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( dispatch(fetchTodo()) )
    }
}

export const deleteTodo = (data)=>{
    
    return function(dispatch){
        
        fetch('http://localhost:3000/todo/'+data,{
            method : 'DELETE'
        })
        .then( res => res.json() )
        .then( data => {
            dispatch(fetchTodo());
        } )
    }
}

export const setLoading = (value)=>{
    return{
        type : 'Set_loading',
        payload : value
    }
}