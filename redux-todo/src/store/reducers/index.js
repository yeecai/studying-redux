import { combineReudcers } from 'react-redux'
import todos from './todos'
import showTodos from './showTodos'

export default combineReudcers({
    todos,
    showTodos
})