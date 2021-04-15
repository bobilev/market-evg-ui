import appReducer from './appReducer'
import * as actions from '../actions'

const initialState = {
    dealers: [],
    items: [],
    loaded: true,
    basket: {
        count: 0,
        items: {}
    }
}

describe('appReducer', () => {
    it('reducer -> init', () => {
        expect(appReducer(undefined, {})).toEqual(
            { ...initialState }
        )
    })
    it('reducer -> fetchStart', () => {
        expect(appReducer(undefined, actions.fetchStart())).toEqual(
            { ...initialState }
        )
    })
    it('reducer -> fetchDone', () => {
        expect(appReducer(undefined, actions.fetchDone())).toEqual(
            { ...initialState, loaded: false }
        )
    })
    it('reducer -> loadItems', () => {
        const item = { name: 'item1', price: 10 }
        expect(appReducer(undefined, actions.loadItems([item]))).toEqual(
            { ...initialState, items: { item1: { ...item } } }
        )
    })
    it('reducer -> addItemToBasket', () => {
        const item = { name: 'item1', price: 10 }
        const state = { ...initialState, items: { item1: { ...item } } }
        expect(
            appReducer(
                { ...state },
                actions.addItemToBasket('item1'))).toEqual(
                    {
                        ...state, basket: {
                            count: 1,
                            items: { item1: 1 }
                        }
                    }
                )
    })
    it('reducer -> removeItemToBasket', () => {
        const item = { name: 'item1', price: 10 }
        const state = {
            ...initialState, items: { item1: { ...item } }, basket: {
                count: 3,
                items: { item1: 3 }
            }
        }
        expect(
            appReducer(
                { ...state },
                actions.removeItemToBasket('item1'))).toEqual(
                    {
                        ...state, basket: {
                            count: 2,
                            items: { item1: 2 }
                        }
                    }
                )
    })
    it('reducer -> deleteItemToBasket', () => {
        const item = { name: 'item1', price: 10 }
        const state = {
            ...initialState, items: { item1: { ...item } }, basket: {
                count: 5,
                items: { item1: 3, item2: 2 }
            }
        }
        expect(
            appReducer(
                { ...state },
                actions.deleteItemToBasket('item1'))).toEqual(
                    {
                        ...state, basket: {
                            count: 2,
                            items: { item2: 2 }
                        }
                    }
                )
    })
    it('reducer -> deleteAllItemToBasket', () => {
        const item = { name: 'item1', price: 10 }
        const state = {
            ...initialState, items: { item1: { ...item } }, basket: {
                count: 5,
                items: { item1: 3, item2: 2 }
            }
        }
        expect(
            appReducer(
                { ...state },
                actions.deleteAllItemToBasket())).toEqual(
                    {
                        ...state, basket: {
                            count: 0,
                            items: {}
                        }
                    }
                )
    })

})