import { GetServerSideProps, NextPage } from "next"
import Link from 'next/link';
import BoardList from "../../components/Board/BoardList"

interface IBoardProps {
    data: any
}

const Board: NextPage<IBoardProps> = (props: IBoardProps) => {
    return (
        <div id="board" className="container">
            <section className="pt-5">
                <h1 className="text-secondary">자유게시판</h1>
                <BoardList data={props.data} />
            </section>
        </div>
    )
}

export default Board

export const getServerSideProps: GetServerSideProps<IBoardProps> = async () => {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/board', {
        method: 'GET'
    })
    const data = await res.json()

    return { props: {
        data: data
    } }
}