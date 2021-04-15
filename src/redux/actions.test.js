import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
    it('action: fetchGetItems', () => {
        expect(actions.fetchGetItems()).toEqual({ type: types.REQUEST_ITEMS })
    })
    it('action: fetchStart', () => {
        expect(actions.fetchStart()).toEqual({ type: types.REQUEST_IN_PROCESS })
    })
    it('action: fetchDone', () => {
        expect(actions.fetchDone()).toEqual({ type: types.REQUEST_DONE })
    })

    it('action: loadItems', () => {
        const items = { items: 'items' }
        expect(actions.loadItems(items)).toEqual({ type: types.LOAD_ITEMS, payload: items })
    })

    it('action: addItemToBasket', () => {
        const items = { items: 'items' }
        expect(actions.addItemToBasket(items)).toEqual({ type: types.ADD_ITEM_TO_BASKET, name: items })
    })
    it('action: removeItemToBasket', () => {
        const items = { items: 'items' }
        expect(actions.removeItemToBasket(items)).toEqual({ type: types.REMOVE_ITEM_TO_BASKET, name: items })
    })

    it('action: deleteItemToBasket', () => {
        const items = { items: 'items' }
        expect(actions.deleteItemToBasket(items)).toEqual({ type: types.DELETE_ITEM_TO_BASKET, name: items })
    })
    it('action: deleteAllItemToBasket', () => {
        expect(actions.deleteAllItemToBasket()).toEqual({ type: types.DELETE_ALL_ITEM_TO_BASKET })
    })

})