import { combineReudcers } from 'react-redux'
import todos from './todos'
import showTodos from ''

export default combineReudcers({
    todos,
    showTodos
})