const initialState =  {
    list : [],
    currentTodo: null,
    isLoading : false
}

const listReducer = ( state = initialState, action )=>{
    switch(action.type)
    {
        case 'Set_loading' : {
            return {...state, isLoading : action.payload};
        }

        case 'Set_todo' : {
            return {...state, list:[...action.payload]};
        }

        case 'Set_todo_with_id' : {
            return {...state, currentTodo : action.payload}
        }
        // case 'Fetch_todo' : {
        //     return {...state, list:[...action.payload]};
        // }
        
        // case 'Add_todo' : {
        //     return {...state, list:[...state.list, action.payload]};
        // }
        
        // case 'Delete_todo' : {
        //     return {...state, list:[...action.payload]};
        // }
        default : return state;
    }
}

export default listReducer;