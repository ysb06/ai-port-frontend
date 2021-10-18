import { NextPage } from "next"

const BoardWrite: NextPage = () => {
    return (
        <div id="board-write" className="container">
            <div className="pt-5">
                <h2>자유게시판</h2>
            </div>
            <form className="mt-3" action="http://localhost:3000/api/board" method="POST">
                <div className="mt-3">
                    <label>이름: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="mt-3">
                    <label>비밀번호: </label>
                    <input type="password" name="password" id="name" required />
                </div>
                <div className="mt-3 title">
                    <label>제목: </label>
                    <input type="text" name="title" required />
                </div>
                <div className="mt-3">
                    <textarea name="content" />
                </div>
                <div>
                    ※ 본문에는 마크다운이 지원됩니다. 단, 제목은 '###'부터 시작해 주세요. '#', '##'은 무시됩니다.
                </div>
                <div className="mt-3">
                    <input type="submit" value="글 등록하기"></input>
                </div>
            </form>
        </div>
    )
}

export default BoardWrite