import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'2af70288d2054cf185abcf331c528f73'
    }
})