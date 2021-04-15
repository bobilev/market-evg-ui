import {
    REQUEST_IN_PROCESS,
    REQUEST_DONE,
    LOAD_ITEMS,
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_TO_BASKET,
    DELETE_ITEM_TO_BASKET,
    DELETE_ALL_ITEM_TO_BASKET
} from '../types'

const initialState = {
    dealers: [],
    items: [],
    loaded: true,
    basket: {
        count: 0,
        items: {}
    }
}

export default (state = initialState, action) => {

    let counterItem = state.basket.items[action.name]

    switch (action.type) {
        case REQUEST_IN_PROCESS:
            return { ...state, loaded: true }
        case REQUEST_DONE:
            return { ...state, loaded: false }
        case LOAD_ITEMS:
            let newLoadItems = action.payload.reduce((now, next) => {
                return { ...now, [next.name]: next }
            }, [])
            return { ...state, items: newLoadItems }
        case ADD_ITEM_TO_BASKET:
            return {
                ...state,
                basket: {
                    count: state.basket.count + 1,
                    items: {
                        ...state.basket.items,
                        [action.name]: counterItem ? counterItem + 1 : 1
                    }
                }
            }
        case REMOVE_ITEM_TO_BASKET:
            let newItems
            if (counterItem - 1 === 0) {
                newItems = { ...state.basket.items }
                delete newItems[action.name]
            } else {
                newItems = {
                    ...state.basket.items,
                    [action.name]: counterItem - 1
                }
            }
            return {
                ...state,
                basket: {
                    count: state.basket.count - 1,
                    items: { ...newItems }
                }
            }

        case DELETE_ITEM_TO_BASKET:
            let newItemsAfterDelete = { ...state.basket.items }
            const countName = state.basket.items[action.name]
            delete newItemsAfterDelete[action.name]
            return {
                ...state,
                basket: {
                    count: state.basket.count - countName,
                    items: { ...newItemsAfterDelete }
                }
            }
        case DELETE_ALL_ITEM_TO_BASKET:
            return { ...state, basket: { count: 0, items: {} } }
        default:
            return state
    }
}