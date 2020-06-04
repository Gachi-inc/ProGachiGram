import {axios} from 'core';

export default {
    getAllByDialogId: id => axios.get('/api/messages?dialog=' + id)

};