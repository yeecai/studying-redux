import { ADD_TO_CART } from "../actionTypes"

const initialState = {
    addedIds: [],
    quantityById: []
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
        if (state.indexOf(action.productId) !== -1) return state
        return [...state, action.productId]
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action
            return { ...state,
                [productId]: (state[[productId] || 0]) + 1
            }
        default: 
        return state
    }
}

export const getQuantity
export const getAddedIds

/**
 *
 * 
 *  checkout the cart */
const cart = (state=initialState, action) => {
    switch (action.type) {
        case CHECKOUT_RQUEST:
            return initialState
            case CHECKOUT_FAILED:
                return action.cart
                default:
                    return {
                        addedIds:addedIds(state.addedIds, action),
                        quantityById: quantityById(state.quantityById, action)
                    }
        
    }
}
export default cart