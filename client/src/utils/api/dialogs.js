import {axios} from 'core';

export default {
    getAll: () => axios.get('/api/dialogs'),
    create: ({ toUser, text }) => axios.post("/dialogs", { toUser, text })
};