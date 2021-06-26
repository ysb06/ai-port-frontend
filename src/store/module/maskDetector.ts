export const MaskDetectorResult = {
    Nothing: -2,
    Calculating: -1,
    Good: 0,
    Bad: 1,
    NoMask: 2
} as const;
// eslint-disable-next-line
export type MaskDetectorResult = typeof MaskDetectorResult[keyof typeof MaskDetectorResult]

const SET_IMAGE = 'maskDetector/REGISTER' as const;
const SET_DETECTING_RESULT = 'maskDetector/SET_RESULT' as const;

export const registerImage = (source: File | Blob | null) => ({
    type: SET_IMAGE,
    source: source
})

export const setDetectingResult = (result: MaskDetectorResult) => ({
    type: SET_DETECTING_RESULT,
    result: result
})

type MaskDetectorAction =
  | ReturnType<typeof registerImage>
  | ReturnType<typeof setDetectingResult>

type MaskDetectorState = {
    source: File | Blob | null,
    sourceName: string,
    sourceURL: string | null,
    result: MaskDetectorResult
};

const initialState: MaskDetectorState = {
    source: null,
    sourceName: "",
    sourceURL: "",
    result: MaskDetectorResult.Nothing,
}

function maskDetector(state: MaskDetectorState=initialState, action: MaskDetectorAction): MaskDetectorState {
    switch (action.type) {
        case SET_IMAGE:
            return { 
                source: action.source,
                sourceName: action.source instanceof File? action.source.name : "",
                sourceURL: action.source? URL.createObjectURL(action.source) : null,
                result: state.result
            }
        case SET_DETECTING_RESULT:
            return { 
                source: state.source,
                sourceName: state.source instanceof File? state.source.name : "",
                sourceURL: state.source? URL.createObjectURL(state.source) : null,
                result: action.result
            }
        default:
            return { 
                source: state.source,
                sourceName: state.source instanceof File? state.source.name : "",
                sourceURL: state.source? URL.createObjectURL(state.source) : null,
                result: state.result
            }
    }
}

export default maskDetector