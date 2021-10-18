import { NextPage } from 'next'
import { useState, useRef } from 'react'
import CamRecog from '../../components/Mask/CamRecog';
import MaskStatus from '../../components/Mask/MaskStatus';


const MaskDetector: NextPage = () => {
    const [mode, setMode] = useState(0);
    const webcamRef = useRef(null)

    return (
        <div id="mask-detector" className="container">
            <div className="jumbotron pt-5">
                <h1 className="jumbotron-heading">
                    이미지 인식 (마스크)
                </h1>
            </div>
            <section className="pt-4">
                <div className="card text-white bg-primary mb-3">
                    <div className="nav card-header nav-pills">
                        <div className="nav-item">
                            <a href="#" data-rb-event-key="link-1" className={`nav-link ${mode == 0? 'active' : ''}`} role="button" onClick={async () => {
                                setMode(0)
                            }}>
                                마스크 인식 (카메라)
                            </a>
                        </div>
                        {/* <div className="nav-item">
                            <a href="#" data-rb-event-key="link-2" className={`nav-link ${mode == 1? 'active' : ''}`} role="button" onClick={() => {setMode(1)}}>
                                마스크 인식 (이미지)
                            </a>
                        </div> */}
                    </div>
                    <div className="card-body row">
                        <CamRecog />
                        <MaskStatus />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MaskDetector