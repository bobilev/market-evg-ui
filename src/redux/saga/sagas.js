import { put, call } from 'redux-saga/effects'
import { loadItems, fetchStart, fetchDone } from '../actions'

export function* sagaGetItems({ dealers }) {
    yield put(fetchStart())
    let payload = yield call(fetchPosts.bind(null, dealers))
    yield put(loadItems(payload))
    yield put(fetchDone())
}

async function fetchPosts({ dealers }) {
    let url = dealers ? dealers.reduce((now, next) => now + next + ',', '?dealers=') : ''

    const response = await fetch(`https://murmuring-tor-81614.herokuapp.com/api/goods/${url}`)
    return await response.json()
}