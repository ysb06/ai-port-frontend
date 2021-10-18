import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import MaskStatePanel from './MaskStatePanel'

const MaskStatus: React.FC = () => {
    const maskDetector = useSelector((state: RootState) => state.maskDetector)

    return (
        <div className="col-md mt-3 mt-md-0">
            <h2>마스크 인식 정보</h2>
            <ul>
                <li><span className="info">딥러닝 서버 상태: </span><span>{maskDetector.serverState}</span></li>
                <li><span className="info">마스크 상태</span><MaskStatePanel maskResult={maskDetector.result} /></li>
            </ul>
        </div>
    )
}

export default MaskStatus