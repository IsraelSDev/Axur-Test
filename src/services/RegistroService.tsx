import axios from 'axios'
import { cadastroI } from '../types/cadastroTypes';


const RegistroService = async (termo: cadastroI) => {
    return await axios.post(process.env.REACT_API_SEND_DATA || "Não encontrei a variável REACT_API_SEND_DATA", termo);

}


export default RegistroService; 