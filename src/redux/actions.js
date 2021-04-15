import {
    REQUEST_ITEMS,
    REQUEST_IN_PROCESS,
    REQUEST_DONE,
    LOAD_ITEMS,
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_TO_BASKET,
    DELETE_ITEM_TO_BASKET,
    DELETE_ALL_ITEM_TO_BASKET
} from './types'

export const fetchGetItems = (dealers) => ({ type: REQUEST_ITEMS, dealers: dealers })
export const fetchStart = () => ({ type: REQUEST_IN_PROCESS })
export const fetchDone = () => ({ type: REQUEST_DONE })

export const loadItems = (items) => ({ type: LOAD_ITEMS, payload: items })

export const addItemToBasket = (name) => ({ type: ADD_ITEM_TO_BASKET, name: name })
export const removeItemToBasket = (name) => ({ type: REMOVE_ITEM_TO_BASKET, name: name })

export const deleteItemToBasket = (name) => ({ type: DELETE_ITEM_TO_BASKET, name: name })
export const deleteAllItemToBasket = () => ({ type: DELETE_ALL_ITEM_TO_BASKET })

