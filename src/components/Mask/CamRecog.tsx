import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col, Button, Figure } from 'react-bootstrap'
import Webcam from "react-webcam";

import { SERVER_ADDRESS } from './index'

import { RootState } from '../../store'
import { increase } from '../../store/module/counter'
import { registerImage, setDetectingResult, MaskDetectorResult } from '../../store/module/maskDetector'

import MaskIndicator from './ResultIndicator'

const CamRecog: React.FC = () => {
    const webcamRef = React.useRef(null)

    const dispatch = useDispatch();
    const maskDetector = useSelector((state: RootState) => state.maskDetector)
    const [imgSrc, setImgSrc] = React.useState("");

    // 이벤트
    const onReceiveResponse = (res: Response) => {
        res.json().then(
            data => {
                dispatch(setDetectingResult(data.result))
            }
        )
    }

    const onCapture = async (event: React.MouseEvent) => {
        let image: string = ""
        if (imgSrc === "") {
            let webcam: any = webcamRef.current
            image = webcam.getScreenshot()

            const blob = await fetch(image).then((res) => res.blob());
            // 이렇게 코드를 갖다 써도 되는 것일까?
            dispatch(registerImage(blob))

            let formData = new FormData()
            formData.append("imageFile", blob)
            const options = {
                method: "POST",
                body: formData
            }
            
            dispatch(setDetectingResult(MaskDetectorResult.Calculating))
            fetch(SERVER_ADDRESS + "mask-detector/", options).then(onReceiveResponse)
        }

        setImgSrc(image)
        dispatch(increase())
    }

    // 조건부 랜더링...이렇게 하는 게 맞는 것일까?
    let imageComp = <div />
    let capButtonComp = <div />
    if (imgSrc === "") {
        imageComp = <Webcam 
                        className="webcam"
                        ref={webcamRef}
                        screenshotFormat="image/png"
                    />
        capButtonComp = <Button className="cs-max" variant="outline-primary" onClick={onCapture}>카메라 촬영 및 분석하기</Button>
    } else {
        imageComp = <Figure className="webcam">
                        <Figure.Image
                            className="cs-max"
                            src={imgSrc}
                        >
                        </Figure.Image>
                    </Figure>
        capButtonComp = <Button className="cs-max" variant="outline-primary" onClick={onCapture}>다시 촬영하기</Button>
    }

    return (
        <Card.Body>
            <Container>
                <Row>
                    <Col className="cs-center">
                        {imageComp}
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <Row className="justify-content-around">
                    <Col className="cs-center my-1" md="4">
                        {capButtonComp}
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