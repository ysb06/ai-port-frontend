import { JSONSchema6 } from 'json-schema';

export const JSCAddPost: JSONSchema6 = {
    properties: {
        name: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
    },
    required: ['name', 'title', 'content'],
    type: 'object',
};
