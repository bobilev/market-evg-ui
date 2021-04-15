import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createSagaMiddleware from 'redux-saga'
import { loadState, saveState } from './redux/store'

import App from './App'
import rootReducer from './redux/reducers/rootReducer';
import sagaWatch from './redux/saga/sagaWatch';

const SagaMiddleware = createSagaMiddleware()

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(
            SagaMiddleware
        )
    )
)
store.subscribe(() => saveState(store.getState()))
SagaMiddleware.run(sagaWatch)

class AppReact {
    start(dealers) {
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App dealers={dealers} />
                </BrowserRouter>
            </Provider>
            , document.getElementById('root'))
    }
}

window.app = new AppReact