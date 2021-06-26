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

export const registerImage = (file: File) => ({
    type: SET_IMAGE,
    file: file
})

export const setDetectingResult = (result: MaskDetectorResult) => ({
    type: SET_DETECTING_RESULT,
    result: result
})

type MaskDetectorAction =
  | ReturnType<typeof registerImage>
  | ReturnType<typeof setDetectingResult>

type MaskDetectorState = {
    targetFile: File | null,
    targetURL: string | null,
    result: MaskDetectorResult
};

const initialState: MaskDetectorState = {
    targetFile: null,
    targetURL: "",
    result: MaskDetectorResult.Nothing,
}

function maskDetector(state: MaskDetectorState=initialState, action: MaskDetectorAction): MaskDetectorState {
    switch (action.type) {
        case SET_IMAGE:
            return { 
                targetFile: action.file,
                targetURL: state.targetFile? URL.createObjectURL(state.targetFile) : null,
                result: state.result
            }
        case SET_DETECTING_RESULT:
            return { 
                targetFile: state.targetFile,
                targetURL: state.targetFile? URL.createObjectURL(state.targetFile) : null,
                result: action.result
            }
        default:
            return { 
                targetFile: state.targetFile,
                targetURL: state.targetFile? URL.createObjectURL(state.targetFile) : null,
                result: state.result
            }
    }
}

export default maskDetector