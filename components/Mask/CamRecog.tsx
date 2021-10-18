import { useRef } from 'react'
import { useSelector } from 'react-redux';
import Webcam from "react-webcam";
import { RootState } from '../../store';
import ShootButton from './ShootButton';

interface CamRecogProps {
    ref: React.MutableRefObject<Webcam>
}

const CamRecog: React.FC = () => {
    const webcamRef = useRef<Webcam>(null)
    const maskDetector = useSelector((state: RootState) => state.maskDetector)

    const webcamPanel = (
        <Webcam
            className="row webcam"
            ref={webcamRef}
            screenshotFormat="image/png"
        />
    )

    const imagePanel = (
        <img
            className="row webcam" 
            src={maskDetector.uri? maskDetector.uri : ''}
        />
    )

    return (
        <div className="col-md">
            {maskDetector.uri? imagePanel : webcamPanel}
            <ShootButton webcamRef={webcamRef}/>
        </div>
    )
}

export default CamRecog