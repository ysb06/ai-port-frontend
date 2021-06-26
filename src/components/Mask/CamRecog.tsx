import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Webcam from "react-webcam";

import { SERVER_ADDRESS } from './index'

import { RootState } from '../../store'
import { increase } from '../../store/module/counter'
import { registerImage, setDetectingResult, MaskDetectorResult } from '../../store/module/maskDetector'

import MaskIndicator from './ResultIndicator'

const CamRecog: React.FC = () => {
    const dispatch = useDispatch();
    const maskDetector = useSelector((state: RootState) => state.maskDetector)

    // 이벤트
    const onReceiveResponse = (res: Response) => {
        res.json().then(
            data => {
                console.log("Received: " + data)
                dispatch(setDetectingResult(data.result))
            }
        )
    }

    // eslint-disable-next-line
    const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            dispatch(registerImage(event.target.files[0]))   
    
            let formData = new FormData()
            formData.append("imageFile", event.target.files[0])
            const options = {
                method: "POST",
                body: formData
            }
            
            dispatch(setDetectingResult(MaskDetectorResult.Calculating))
            fetch(SERVER_ADDRESS + "mask-detector/", options).then(onReceiveResponse)
        }
        dispatch(increase())
    }

    return (
        <Card.Body>
            <Container>
                <Row>
                    <Col className="cs-center">
                        <Webcam className="cs-webcam" />
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <Row className="justify-content-around">
                    <Col className="cs-center my-1" md="4">
                        <Button className="cs-max">카메라 촬영 및 분석</Button>
                    </Col>
                    <Col className="my-1">
                        <MaskIndicator value={maskDetector.result} />
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default CamRecog