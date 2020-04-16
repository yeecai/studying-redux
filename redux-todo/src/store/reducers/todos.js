const todos = ( state = [{id: 1, text: 'ok', done: false}, {id: 2, text: 'ok', done: false}], action ) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done} : todo
        )

        default: 
        return state
    }
}

export default todos