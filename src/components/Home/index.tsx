import React from 'react';
import { Button, Card, Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './style.css';

const Home: React.FC = () => {
    return (
        <main id="home">
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">AI Projects</h1>
                    <p>
                        인공지능 관련 공부를 하면서 진행한 프로젝트들을 모아둔 포트폴리오 페이지입니다. 
                        현재는 이미지 분류만 추가되어 있는 빈약한 페이지이지만 곧, 번역, 챗봇, DST, DKT 등 이전에 수행했던 인공지능 과업들을 계속 업데이트 할 예정입니다.
                    </p>
                </Jumbotron>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card className="main-menu">
                            <Card.Img className="p-4" variant="top" src="image/home-01.jpg" />
                            <Card.Body>
                                <Card.Title>Image Classification</Card.Title>
                                <Card.Text>
                                    제가 생성한 마스크 인식 모델을 체험하고 모델 개발 스토리를 확인할 수 있습니다.
                                </Card.Text>
                                <Link to="/mask">
                                    <Button variant="primary">해당 페이지로 이동</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Home;