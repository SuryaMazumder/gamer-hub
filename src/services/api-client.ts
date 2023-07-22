import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'5c56881cecfa417d98f3120c27e137c3'
    }
})