import { combineReducers } from 'redux'
import todos from './todos'
import showTodos from './showTodos'

export default combineReducers({
    todos,
    showTodos
})