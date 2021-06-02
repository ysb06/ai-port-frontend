const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({
    type: INCREASE
})

export const decrease = () => ({
    type: DECREASE
})

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
})

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CounterState = {
    count: number;
};

function counter(state: CounterState = { count: 0 }, action: CounterAction): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 }
        case DECREASE:
            return { count: state.count - 1 }
        case INCREASE_BY:
            return { count: state.count + action.payload }
        default:
            return { count: state.count }
    }
}

export default counter