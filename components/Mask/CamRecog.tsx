import React from 'react'
import Webcam from "react-webcam";

const CamRecog: React.FC = () => {
    const webcamRef = React.useRef(null)

    return (
        <div>
            <Webcam
                className="webcam"
                ref={webcamRef}
                screenshotFormat="image/png"
            />
        </div>
    )
}

export default CamRecog