const CLICK_DOWN = 'controllerUI/CLICK_DOWN' as const;
const CLICK_UP = 'controllerUI/CLICK_UP' as const;
const SET_AI_LIST = 'controllerUI/SET_AI_LIST' as const;

export const clickDown = () => ({
    type: CLICK_DOWN
})

export const clickUp = () => ({
    type: CLICK_UP
})

export const showAiList = (state: boolean) => ({
    type: SET_AI_LIST,
    show: state
})

type UIAction =
    | ReturnType<typeof clickDown>
    | ReturnType<typeof clickUp>
    | ReturnType<typeof showAiList>

type UIState = {
    mouseDown: boolean
    showAiList: boolean
};

const initialState: UIState = {
    mouseDown: false,
    showAiList: false
}

function controller(state: UIState=initialState, action: UIAction): UIState {
    switch (action.type) {
        case CLICK_DOWN:
            return {
                mouseDown: true,
                showAiList: state.showAiList
            }
        case CLICK_UP:
            return {
                mouseDown: false,
                showAiList: false
            }
        case SET_AI_LIST:
            return {
                mouseDown: state.mouseDown,
                showAiList: action.show
            }
        default:
            return {
                mouseDown: state.mouseDown,
                showAiList: state.showAiList
            }
    }
}

export default controller