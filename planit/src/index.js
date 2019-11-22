import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'; //applyMiddleware enhances store
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux' //bidding layer -> our redux to react
import thunk from 'redux-thunk' // middleware
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true })
    )
);

// wait to render till firebase response is ready
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})

