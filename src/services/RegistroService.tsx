import axios from 'axios'
import { cadastroI } from '../models/cadastroTypes';


const RegistroService = async (termo: cadastroI) => {
    // return await axios.post(process.env.REACT_API_SEND_DATA || "Não encontrei a variável REACT_API_SEND_DATA", termo);
    return await axios.post('http://testapp.axreng.com:4567/crawl', termo)
}


export default RegistroService; 