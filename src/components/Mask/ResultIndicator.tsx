import React from 'react';
import { Alert } from 'react-bootstrap'

const localState = [
    { "variant": "dark", "text" : "마스크 이미지 없음" },
    { "variant": "success", "text" : "마스크 정상 착용" },
    { "variant": "warning", "text" : "마스크 착용 상태 불량" },
    { "variant": "danger", "text" : "마스크 없음" },
]

interface ResultIndicatorProps {
    value: number
}

const ResultIndicator: React.FC<ResultIndicatorProps> = (props: ResultIndicatorProps) => {
    return (
        <Alert className="m-0" variant={localState[props.value + 1].variant}>
            <Alert.Heading className="text-center m-0">{localState[props.value + 1].text}</Alert.Heading>
        </Alert>
    )
}

export default ResultIndicator