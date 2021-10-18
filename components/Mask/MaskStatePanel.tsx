import React from 'react'
import { MaskDetectorResult } from '../../store/module/maskDetector'

interface MaskStatePanelProps {
    maskResult: MaskDetectorResult
}

const MaskStatePanel: React.FC<MaskStatePanelProps> = (props: MaskStatePanelProps) => {
    let panelStyle = 'alert my-2 text-center '
    let text = ''
    switch(props.maskResult) {
        case MaskDetectorResult.Nothing: 
            text = '이미지 데이터 대기 중'
            panelStyle += 'alert-secondary'
            break
        case MaskDetectorResult.Calculating: 
            text = '데이터 분석 중...'
            panelStyle += 'alert-info'
            break
        case MaskDetectorResult.Good: 
            text = '마스크 정상 착용'
            panelStyle += 'alert-success'
            break
        case MaskDetectorResult.Bad: 
            text = '마스크 착용 상태 불량'
            panelStyle += 'alert-warning'
            break
        case MaskDetectorResult.NoMask: 
            text = '마스크 없음'
            panelStyle += 'alert-danger'
            break
    }

    const spinner = (
        <div className="spinner-border" />
    )

    return (
        <div className={panelStyle}>
            {text}
            {props.maskResult == MaskDetectorResult.Calculating? spinner : <></>}
        </div>
    )
}

export default MaskStatePanel