import { request } from '../../utils/request'

export default {
    namespace: 'mycount',
    state: {
        num: 0
    },
    reducers:{
        add(state){
            const newNum = state.num + 1;
            return {num:newNum}
        },
        minus(state){
            const newNum = state.num - 1;
            return {num: newNum}  
        }
    },
    effects:{
        * getMusicData(key){
            const music_data = yield request(`http://localhost:3000/search?keywords=${key}`)
        }
    }

}