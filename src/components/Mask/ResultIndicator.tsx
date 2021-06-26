import React from 'react';
import { Alert, Spinner } from 'react-bootstrap'
import { MaskDetectorResult } from '../../store/module/maskDetector'

const localResultState = [
    { "variant": "success", "text" : "마스크 정상 착용" },
    { "variant": "danger", "text" : "마스크 착용 상태 불량" },
    { "variant": "danger", "text" : "마스크 없음" },
]

const localNonResultState = [
    { "variant": "dark", "text" : "마스크 이미지 없음" },
    { "variant": "warning", "text" : "분석 중" },
]

interface ResultIndicatorProps {
    value: MaskDetectorResult
}

const ResultIndicator: React.FC<ResultIndicatorProps> = (props: ResultIndicatorProps) => {
    let state = props.value
    if(props.value >= 0) {
        return (
            <Alert className="m-0" variant={localResultState[state].variant}>
                <Alert.Heading className="text-center m-0">{localResultState[state].text}</Alert.Heading>
            </Alert>
        )
    } else {
        switch(props.value) {
            case MaskDetectorResult.Calculating:
                return (
                    <Alert className="m-0" variant={localNonResultState[1].variant}>
                        <Alert.Heading className="text-center m-0">
                            <Spinner animation="border" role="status" />
                            {localNonResultState[1].text}
                        </Alert.Heading>
                    </Alert>
                )
            default:
                state += 2  // MaskDetectorResult 의 최솟값이 더해져야 한다.
                return (
                    <Alert className="m-0" variant={localNonResultState[state].variant}>
                        <Alert.Heading className="text-center m-0">{localNonResultState[state].text}</Alert.Heading>
                    </Alert>
                )
        }
    }

    
}

export default ResultIndicator