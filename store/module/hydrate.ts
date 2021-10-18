import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

// Next에서 Redux를 쓰기 위해서 정의
// SSR과 관계 있음

function hydrator(state: any = {}, action: AnyAction) {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default hydrator