import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import panelDataReducer from './reducer/panelDataReducer'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import './careeria2020.css'
import './App.css'

const reducer = panelDataReducer
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
