import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Card, Container, Jumbotron, Nav } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { RootState } from '../../store'

import ImageRecog from './ImageRecog'
import CamRecog from './CamRecog'

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
export const SERVER_ADDRESS = "https://server.aiport.kr/"
// export const SERVER_ADDRESS = "http://localhost:5001/"

const Mask: React.FC = () => {
    const counter = useSelector((state: RootState) => state.counter)
    const [mode, setMode] = useState(0);

    let workBody = <div></div>
    switch(mode) {
        case 0:
            workBody = <CamRecog />
            break
        case 1:
            workBody = <ImageRecog />
            break
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
                        <Nav variant="pills" defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" onClick={() => setMode(0)}>마스크 인식 (카메라)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" onClick={() => setMode(1)}>마스크 인식 (이미지)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    {workBody}
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
