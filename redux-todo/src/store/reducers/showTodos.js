import ShowFilters from '../actions';

const showTodosType = (state = ShowFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_SHOW_TYPE':
            return action.filter
        default:
            return state
    }
}

export default showTodosType