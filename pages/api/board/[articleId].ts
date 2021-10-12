import { NextApiRequest, NextApiResponse } from 'next';
import { deletePost, queryPost } from '../../../controllers/board-controller';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    console.log(`/board/[articleId] ${method}`)

    switch (method) {
        case 'GET':
            const postList = await queryPost(req)
            res.status(200).json(postList)
            break
        case 'DELETE':
            const result = await deletePost(req)
            res.status(200).end()
            break
        default:
            res.status(400).end()
            break
    }
}