import { NextApiRequest } from 'next';
import { IAddPostRequest } from './interfaces/board-interfaces';
import { validateParamWithData } from './request-validator'
import { JSCAddPost } from './schemata/board-schemata';
import admin from 'firebase-admin';

const MAX_POST_IN_PAGE = 10
const BOARD_COLLECTION_NAME = 'board'
const POST_CONTENT_COLLECTION_NAME = 'contents'

interface IPostList {
    date: Date,
    activated: boolean,
    up_vote: number,
    content: string,
    author: { 
        name: string, 
        id: number | null
    },
    title: string
}

// DB 사용을 위한 Firebase 초기화
if (process.env.credential !== undefined && admin.apps.length <= 0) {
    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.credential))
    });
    console.log('Firebase initialized')
}

export async function queryPostList(req: NextApiRequest) {
    const db = admin.firestore();
    const boardRef = db.collection(BOARD_COLLECTION_NAME)
    const result = await boardRef.where('activated', '==', true).orderBy('date', 'desc').limit(MAX_POST_IN_PAGE).get()
    if (result.empty) {
        return Promise.reject('No result')
    }

    const resultData = result.docs.map(element => {
        const data = element.data()
        delete data['password']
        data.id = element.id
        return data
    })
    
    return {
        items: resultData,
        page: 1
    }
}

export async function queryPost(req: NextApiRequest) {
    const db = admin.firestore();
    const postRef = db.collection(BOARD_COLLECTION_NAME).doc(req.query.articleId as string)
    const postContentRef = postRef.collection(POST_CONTENT_COLLECTION_NAME)

    const post_result = await postRef.get()
    if (post_result.exists === false) {
        return Promise.reject('No result')
    }
    const content_result = await postContentRef.orderBy('date').limit(1).get()
    if (content_result.empty) {
        return Promise.reject('No content')
    }

    const result_data = post_result.data()
    if (result_data) {
        result_data.content = content_result.docs[0].data()
    } else {
        return Promise.reject('Unknown error: Query failed')
    }

    result_data.id = postRef.id
    return result_data
}

export async function addPost(req: NextApiRequest) {
    // 입력 유효성 체크
    const validateReq = validateParamWithData<IAddPostRequest>(
        req.body, JSCAddPost
    )
    if (validateReq.result === false) {
        return Promise.reject('Invalid request')
    }

    const data = validateReq.data
    // --------
    // 아래 부분은 모델에 해당하는 코드 (DAO의 역할)
    // 따라서 추후 코드를 분리할 것

    const db = admin.firestore();
    const boardRef = db.collection(BOARD_COLLECTION_NAME)
    // 포스트 생성
    const post_result = await boardRef.add({
        activated: true,
        author: {
            id: null,
            name: data.name
        },
        date: new Date(),
        password: data.password,
        title: data.title,
        up_vote: 0
    })

    // 포스트 내용 생성
    const postRef = boardRef.doc(post_result.id)
    const postContentRef = postRef.collection(POST_CONTENT_COLLECTION_NAME)
    const content_result = await postContentRef.add({
        text: data.content,
        date: new Date()
    })

    await postRef.update({
        content: content_result.id
    })

    return 0
}

export async function deletePost(req: NextApiRequest) {
    const id = req.query.articleId

    //비밀번호 체크 기능 추가할 것

    const db = admin.firestore();
    const postRef = db.collection(BOARD_COLLECTION_NAME).doc(req.query.articleId as string)
    
    await postRef.update({
        activated: false
    })

    return 0
}