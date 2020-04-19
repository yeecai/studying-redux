import { ShowFilters } from '../actions';

const getTodosFilter = (state = ShowFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_SHOW_TYPE':
            return action.filter
        default:
            return state
    }
}

export default getTodosFilter