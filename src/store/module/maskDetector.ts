const REGISTER = 'maskDetector/REGISTER' as const;

export const registerImage = (file: File) => ({
    type: REGISTER,
    file: file
})

type MaskDetectorAction =
  | ReturnType<typeof registerImage>

type MaskDetectorState = {
    target: File | null,
    targetName: string,
    targetURL: string
};

const initialState: MaskDetectorState = {
    target: null,
    targetName: "",
    targetURL: ""
}

function maskDetector(state: MaskDetectorState=initialState, action: MaskDetectorAction): MaskDetectorState {
    switch (action.type) {
        case REGISTER:
            return { 
                target: action.file,
                targetName: action.file.name,
                targetURL: URL.createObjectURL(action.file)
            }
        default:
            return { 
                target: state.target,
                targetName: state.target? state.target.name : "",
                targetURL: state.target? URL.createObjectURL(state.target) : "",
            }
    }
}

export default maskDetector