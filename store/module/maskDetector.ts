export const MaskDetectorResult = {
    Nothing: -2,
    Calculating: -1,
    Good: 0,
    Bad: 1,
    NoMask: 2
} as const;

export type MaskDetectorResult = typeof MaskDetectorResult[keyof typeof MaskDetectorResult]

const SET_IMAGE = 'maskDetector/REGISTER' as const;
const SET_DETECTING_RESULT = 'maskDetector/SET_RESULT' as const;
const SET_SERVER_STATE_BAD = 'maskDetector/SET_SERVER_BAD' as const;
const RESET_MODULE = 'maskDetector/RESET' as const;

export const registerImage = (source: Blob, uri: string) => ({
    type: SET_IMAGE,
    source: source,
    uri: uri,
    result: MaskDetectorResult.Calculating
})

export const setDetectingResult = (result: MaskDetectorResult) => ({
    type: SET_DETECTING_RESULT,
    result: result
})

export const notifyServerBad = () => ({
    type: SET_SERVER_STATE_BAD
})

export const resetMaskDetector = () => ({
    type: RESET_MODULE
})

type MaskDetectorAction =
  | ReturnType<typeof registerImage>
  | ReturnType<typeof setDetectingResult>
  | ReturnType<typeof notifyServerBad>
  | ReturnType<typeof resetMaskDetector>

type MaskDetectorState = {
    source: File | Blob | null
    uri: string | null
    result: MaskDetectorResult
    serverState: 'Unknown' | 'Good' | 'Not Working'
};

const initialState: MaskDetectorState = {
    source: null,
    uri: null,
    result: MaskDetectorResult.Nothing,
    serverState: 'Unknown'
}

function maskDetector(state: MaskDetectorState=initialState, action: MaskDetectorAction): MaskDetectorState {
    switch (action.type) {
        case SET_IMAGE:
            return {
                source: action.source,
                uri: action.uri,
                result: action.result,
                serverState: state.serverState
            }
        case SET_DETECTING_RESULT:
            return {
                source: state.source,
                uri: state.uri,
                result: action.result,
                serverState: 'Good'
            }
        case SET_SERVER_STATE_BAD:
            return {
                source: null,
                uri: null,
                result: MaskDetectorResult.Nothing,
                serverState: 'Not Working'
            }
        case RESET_MODULE:
            return {
                source: null,
                uri: null,
                result: MaskDetectorResult.Nothing,
                serverState: state.serverState
            }
        default:
            return {
                source: state.source,
                uri: state.uri,
                result: state.result,
                serverState: state.serverState
            }
    }
}

export default maskDetector