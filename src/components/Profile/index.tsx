import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import './style.css'

const Profile: React.FC = () => {
    const [markdown, setMarkdown] = useState('')

    if (markdown === '') {
        fetch('/markdown/profile.md').then((res) => res.text()).then((text) => { setMarkdown(text) })
    }

    return (
        <div id="profile-page" className="page">
            <Container className="common-info mt-5">
                <Row>
                    <Col className="cs-center mb-3 mx-4">
                        <img src="https://ca.slack-edge.com/T01JJ7GJW8Z-U01JQ4DPF7D-505e49e6941c-512" alt="Seungbin Yim" />
                    </Col>
                    <Col className="mb-3 mx-4">
                        <Container className="mb-4">
                            <Row>
                                <h1 className="title-name">임승빈</h1>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="contact-title">Contact</Row>
                            <Row>
                                <span className="contact-element-title">E-mail</span>
                                <span>010-5189-4230</span>
                            </Row>
                            <Row>
                                <span className="contact-element-title">Phone</span>
                                <span><a href="mailto:ysb06@naver.com">ysb06@naver.com</a></span>
                            </Row>
                            <Row>
                                <span className="contact-element-title">GitHub</span>
                                <span><a href="https://github.com/ysb06">https://github.com/ysb06</a></span>
                            </Row>
                            <Row>
                                <span className="contact-element-title">Blog</span>
                                <span><a href="https://github.com/ysb06">https://hgarchive.tistory.com/</a></span>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                    {markdown}
                </ReactMarkdown>
            </Container>
        </div>
    )
}

export default Profile