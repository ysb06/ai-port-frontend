import { combineReducers } from 'redux'
import counter from './module/counter'
import maskDetector from './module/maskDetector'

const rootReducer = combineReducers({
    counter,
    maskDetector
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>