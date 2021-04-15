import { takeEvery } from 'redux-saga/effects'
import { REQUEST_ITEMS } from '../types'
import { sagaGetItems } from './sagas'


export default function* sagaWatch() {
    yield takeEvery(REQUEST_ITEMS, sagaGetItems)
}