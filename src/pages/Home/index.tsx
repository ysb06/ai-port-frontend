import React from 'react';
import './style.css';

import { Container, Jumbotron } from 'react-bootstrap'

const Home: React.FC = () => {
    return (
        <main id="home">
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">AI Projects</h1>
                    <p>
                        자연어 처리(NLP) 중심의 인공지능 프로젝트를 정리한 포트폴리오 페이지입니다.
                        챗봇, 번역, Dialogue State Tracking (DST), 그리고 Deep Knowledge Tracking (DKT) 등
                        제가 수행한 여러 자연어 처리 Task들을 정리해 두었습니다.
                    </p>
                </Jumbotron>
            </Container>
        </main>
    )
}

export default Home;