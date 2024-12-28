import {combineReducers, legacy_createStore} from 'redux'
import {reducer as CounterReducer} from './Redux/Counter/Reducer'

let rootRedux=combineReducers({
    counter:CounterReducer
})
   




 export let store = legacy_createStore(rootRedux)
