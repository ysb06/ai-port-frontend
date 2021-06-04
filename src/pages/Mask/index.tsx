import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Jumbotron, Nav, Row, Col, Figure, Form } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { RootState } from '../../store'
import { increase } from '../../store/module/counter'
import { registerImage, setDetectingResult } from '../../store/module/maskDetector'

import MaskIndicator from '../../components/Mask/ResultIndicator'

import './style.css';


const markdown = `
# 개요

이 모델은 마스크 이미지를 넣으면 이미지 내 인물이 마스크를 착용했는지 여부를 판단할 수 있습니다.

## not OK
### very not ok
**Just a link**: [React](https://reactjs.com).

*Simple*: [Google]

> 인용문

[Google]: http://www.google.com
`

const Mask: React.FC = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter)
    const maskDetector = useSelector((state: RootState) => state.maskDetector)

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            dispatch(registerImage(event.target.files[0]))   

            let formData = new FormData()
            formData.append("imageFile", event.target.files[0])
            const options = {
                method: "POST",
                body: formData
            }
            // 지금은 이미지 올리자마자 바로 요청하는데
            // 페이지를 로딩 상태로 변경하고 fetch
            // 데이터를 받으면 로딩 상태를 제거
            fetch("http://35.197.50.132:5001/mask-detector/", options)            
                .then(res => res.json())
                .then(data => {
                    console.log("Received: " + data)
                    dispatch(setDetectingResult(data.result))
                });
        }
        dispatch(increase())
    }

    return (
        <div id="mask-page">
            <Container className="p-3">
                <Jumbotron className="mb-2">
                    <h1>이미지 인식 (Image)</h1>
                </Jumbotron>
            </Container>
            <Container>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#mask">
                            <Nav.Item>
                                <Nav.Link href="#mask">마스크 인식</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="cs-center">
                                        <Figure>
                                            <Figure.Image
                                                width={400}
                                                height={400}
                                                src={maskDetector.targetURL}
                                            >
                                            </Figure.Image>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid="md">
                                <Row className="justify-content-around">
                                    <Col className="cs-center py-2" md="4">
                                        <Form encType="multipart/form-data">
                                            <Form.File
                                                id="custom-file"
                                                label={maskDetector.target? maskDetector.target.name : ""}
                                                accept="image/png, image/jpeg"
                                                custom
                                                onChange={uploadImage}
                                            />
                                        </Form>
                                    </Col>
                                    <Col>
                                        <MaskIndicator value={maskDetector.result} />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <ReactMarkdown className="markdown" remarkPlugins={[gfm]}>
                    {markdown}
                </ReactMarkdown>
                <div>
                    Load counter: {counter.count}
                </div>
            </Container>
        </div>
    )
}

export default Mask

// 1. 이미지 선택하면 원본 이미지 표시<br />
// 2. 이미지를 서버로 전송<br />
// 3. 서버에서 결과를 받을 때까지 대기 (서버는 여러 개 요청 동시 처리)<br />
// 4. 서버에서 받은 결과 표시
