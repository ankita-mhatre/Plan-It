//combine other two reducers and pass to createStore

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'; // syn firestore and state
import { firebaseReducer } from 'react-redux-firebase'
const rootReducer = combineReducers({
    auth : authReducer,
    project : projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;