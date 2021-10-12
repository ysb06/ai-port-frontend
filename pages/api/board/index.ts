import { NextApiRequest, NextApiResponse } from 'next';
import { queryPostList, addPost } from '../../../controllers/board-controller'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    console.log(method)

    switch (method) {
        case 'GET':
            const postList = await queryPostList(req)
            res.status(200).json(postList)
            break
        case 'POST':
            try {
                await addPost(req)
            } catch (e) {
                console.log(e)
                res.status(400).end(e)
            }
            res.redirect('/board')
            break
        default:
            res.status(400).end()
            break
    }
}