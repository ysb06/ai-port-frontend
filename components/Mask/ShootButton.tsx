import { RefObject } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store'
import { registerImage, setDetectingResult, notifyServerBad, resetMaskDetector, MaskDetectorResult } from '../../store/module/maskDetector'
import Webcam from 'react-webcam'

const SERVER_ADDRESS = "https://server.aiport.kr/"

interface ShootButtonProps {
    webcamRef: RefObject<Webcam>
}

/*
해야 할 일
- 마스크 상태 컴포넌트 제작
- 탑 메뉴 다른 데 클릭 시 사라지기
- 기타 포트폴리오 답게 내용 채우기 및 디자인 (https://cdg-portfolio.com/)
*/

const ShootButton: React.FC<ShootButtonProps> = (props: ShootButtonProps) => {
    const dispatch = useDispatch();
    const maskDetector = useSelector((state: RootState) => state.maskDetector)

    const onCapture = async (event: React.MouseEvent) => {
        const webcam = props.webcamRef.current
        const image = webcam?.getScreenshot()

        if (image) {
            const blob = await fetch(image).then((res) => res.blob());
            console.log(blob)
            dispatch(registerImage(blob, image))

            let formData = new FormData()
            formData.append("imageFile", blob)
            const options = {
                method: "POST",
                body: formData
            }

            try {
                const result_raw = await fetch(SERVER_ADDRESS + "mask-detector/", options)
                if (result_raw.status == 200) {
                    const result = await result_raw.json()
                    dispatch(setDetectingResult(result.result))
                } else {
                    console.log('Server not working...')
                    console.log(result_raw.status)
                    dispatch(notifyServerBad())
                }
            } catch (e) {
                console.log('Server Error...')
                console.log(e)
                dispatch(notifyServerBad())
            }
        }
    }

    // ----- //

    const shootButton = (
        <button type="button" className="row btn btn-primary shoot-button" onClick={onCapture}>
            사진 촬영하기
        </button>
    )

    const resetButton = (
        <button type="button" className="row btn btn-primary shoot-button" onClick={() => { dispatch(resetMaskDetector()) }}>
            카메라 초기화
        </button>
    )

    return (
        <>
            {maskDetector.result == MaskDetectorResult.Nothing ? shootButton : resetButton}
        </>
    )
}

export default ShootButton