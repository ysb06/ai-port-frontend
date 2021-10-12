import Link from 'next/link';
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from "next"
import { useState } from 'react'
import { TimeStamp } from "../../../controllers/interfaces/firebase-interfaces"
import { convertDate } from "../../../utils/date-converter"
import { MouseEventHandler } from 'hoist-non-react-statics/node_modules/@types/react';


interface IBoardArticleProps {
    id: string
    activated: boolean
    date: TimeStamp
    title: string
    author: {
        id: string
        name: string
    }
    up_vote: number
    content: {
        text: string
        date: TimeStamp
    }
}

const BoardArticle: NextPage<IBoardArticleProps> = (props: IBoardArticleProps) => {
    const [showDelete, setShowDelete] = useState(false)
    const router = useRouter()

    async function deletePost(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        // password의 값을 읽어 넘겨주는 부분 구현할 것
        const result = await fetch(`http://localhost:3000/api/board/${props.id}`, {
            method: 'DELETE'
        })
        router.push('/board')
    }
    
    return (
        <div id="board" className="container">
            <div className="pt-5">
                <h1 className="text-secondary">자유게시판</h1>
            </div>
            <article>
                <div className="row pt-3">
                    <div className="col">
                        <h2>{props.title}</h2>
                    </div>
                </div>
                <div className="row bg-primary p-2">
                    <div className="col">
                        <span className="mr-5">작성자: {props.author.name}</span>
                        <span className="mx-5">
                            <svg className="svg-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                            {convertDate(props.content.date)}
                        </span>
                    </div>
                </div>
                <div className="row text-content p-2">
                    <div style={{ whiteSpace: "pre-wrap" }}>
                        {props.content.text}
                    </div>
                </div>
            </article>
            <div className="my-3">
                <div className="row justify-content-start delete-panel">
                    <a href="#" className="col-md-2 my-1" onClick={() => setShowDelete(!showDelete)}>
                        <svg className="svg-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                        글 삭제
                    </a>
                    <form className="col-md-5 my-1" style={{visibility: showDelete? "visible" : "hidden"}}>
                        <label>비밀번호: </label>
                        <input type="password" name="password" id="name" required />
                        <input type="button" value="삭제" onClick={(e) => deletePost(e)}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BoardArticle

export const getServerSideProps: GetServerSideProps<IBoardArticleProps> = async ({ query }) => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/board/${query.articleId}`, {
        method: 'GET'
    })
    const data = await res.json()

    return { props: data }
}