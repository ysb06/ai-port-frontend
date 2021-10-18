import { combineReducers } from 'redux'
import { createStore } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper'

import maskDetector from './module/maskDetector'
import hydrator from './module/hydrate';
import controllerUI from './module/controllerUI'

const rootReducer = combineReducers({
    hydrator,
    maskDetector,
    controllerUI
})

const makeStore = (context: Context) => createStore(rootReducer);
const wrapper = createWrapper(makeStore, { debug: true });

export type RootState = ReturnType<typeof rootReducer>

export default wrapper;