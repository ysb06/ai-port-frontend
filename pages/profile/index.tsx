import { NextPage } from 'next'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Profile: NextPage = () => {
    let markdown = "## 소개\r\n" + 
    "안녕하세요. 프로그래밍을 좋아하는 프론트엔드 개발자 임승빈입니다. HCI 및 UX 분야를 중심으로 연구하고 설계된 디자인을 프로토타이핑을 위해 프로그래밍을 배우기 시작했으며 그 이후로도 계속 연구직에 있으면서도 프로그래밍이 너무 재미있어 꾸준히 공부해 왔습니다. HCI 및 UX 분야를 공부하다 보니 사용성에 관심이 많으며 여기서 더 나아가 코드를 작성할 때에도 다른 사람이 알아보기 쉬워야 한다는 Clean Code를 지향합니다.\r\n\r\n" + 
    "프로그래밍을 좋아했기 때문에 비록 3년 이상 연구직으로 일을 하면서도 꾸준히 프로그래밍 업무를 맡아서 진행해 왔으며, 최근 서비스를 배포하는 것에 관심을 두다보니 자연스럽게 프론트엔드 기술에 관심을 가지게 되었고 이제는 본격적인 프론트엔드 개발자로서 나아가고자 합니다."

    return (
        <div id="profile" className="container">
            <div className="jumbotron pt-5">
                <h1 className="jumbotron-heading">
                    프로필
                </h1>
            </div>
            <div className="row py-5">
                <div className="col">
                    <img src="https://ca.slack-edge.com/T01JJ7GJW8Z-U01JQ4DPF7D-505e49e6941c-512" alt="Seungbin Yim" />
                </div>
                <div className="mb-3 mx-4 col">
                    <div className="mb-4">
                        <div className="row">
                            <h2 className="title-name">임승빈</h2>
                        </div>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <div>
                            <span className="contact-element-title">Phone</span>
                            <span>010-5189-4230</span>
                        </div>
                        <div>
                            <span className="contact-element-title">E-mail</span>
                            <span><a href="mailto:ysb06@naver.com">ysb06@naver.com</a></span>
                        </div>
                        <div>
                            <span className="contact-element-title">GitHub</span>
                            <span><a href="https://github.com/ysb06">https://github.com/ysb06</a></span>
                        </div>
                        <div>
                            <span className="contact-element-title">Blog</span>
                            <span>
                                <a href="https://github.com/ysb06">https://hgarchive.tistory.com/</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                {markdown}
            </ReactMarkdown>
        </div>
    )
}

export default Profile