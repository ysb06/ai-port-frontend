const REGISTER_IMAGE = 'maskDetector/REGISTER' as const;
const SET_DETECTING_RESULT = 'maskDetector/SET_RESULT' as const;

export const registerImage = (file: File) => ({
    type: REGISTER_IMAGE,
    file: file
})

export const setDetectingResult = (result: number) => ({
    type: SET_DETECTING_RESULT,
    result: result
})

type MaskDetectorAction =
  | ReturnType<typeof registerImage>
  | ReturnType<typeof setDetectingResult>

type MaskDetectorState = {
    target: File | null,
    targetName: string,
    targetURL: string,
    result: number
};

const initialState: MaskDetectorState = {
    target: null,
    targetName: "",     // target에 종속
    targetURL: "",      // target에 종속, 이 부분도 컴포넌트에 포함시키고 삭제할 것
    result: -1,
}

function maskDetector(state: MaskDetectorState=initialState, action: MaskDetectorAction): MaskDetectorState {
    switch (action.type) {
        case REGISTER_IMAGE:
            return { 
                target: action.file,
                targetName: action.file.name,
                targetURL: URL.createObjectURL(action.file),
                result: state.result
            }
        case SET_DETECTING_RESULT:
            return { 
                target: state.target,
                targetName: state.target? state.target.name : "",
                targetURL: state.target? URL.createObjectURL(state.target) : "",
                result: action.result
            }
        default:
            return { 
                target: state.target,
                targetName: state.target? state.target.name : "",
                targetURL: state.target? URL.createObjectURL(state.target) : "",
                result: state.result
            }
    }
}

export default maskDetector