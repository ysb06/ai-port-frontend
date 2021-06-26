import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Row, Col, Figure, Form } from 'react-bootstrap'

import { SERVER_ADDRESS } from './index'

import { RootState } from '../../store'
import { increase } from '../../store/module/counter'
import { registerImage, setDetectingResult, MaskDetectorResult } from '../../store/module/maskDetector'

import MaskIndicator from './ResultIndicator'

const ImageRecog: React.FC = () => {
    const dispatch = useDispatch();
    const maskDetector = useSelector((state: RootState) => state.maskDetector)

    // 이벤트
    const onReceiveResponse = (res: Response) => {
        res.json().then(
            data => {
                dispatch(setDetectingResult(data.result))
                console.log("Receiveing...")
                console.log(data)
            }
        )
    }

    const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            dispatch(registerImage(event.target.files[0]))   
    
            let formData = new FormData()
            formData.append("imageFile", event.target.files[0])
            const options = {
                method: "POST",
                body: formData
            }

            console.log("Transmitting...")
            console.log(options)
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
                        <Figure className="cs-webcam fix-height">
                            <Figure.Image
                                className="cs-maximize"
                                src={maskDetector.sourceURL? maskDetector.sourceURL : ""}
                            >
                            </Figure.Image>
                        </Figure>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <Row className="justify-content-around">
                    <Col className="cs-center my-1" md="4">
                        <Form encType="multipart/form-data">
                            <Form.File
                                id="custom-file"
                                label={maskDetector.source? maskDetector.sourceName : ""}
                                accept="image/png, image/jpeg"
                                custom
                                onChange={onSelectImage}
                            />
                        </Form>
                    </Col>
                    <Col className="my-1">
                        <MaskIndicator value={maskDetector.result} />
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default ImageRecog