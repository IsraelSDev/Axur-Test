import { cadastroI } from '../models/cadastroTypes';
import axios from 'axios'

const RegistroService = async (termo: cadastroI) => {
    return await axios.post(`${process.env.REACT_APP_SEND_DATA}`, termo);
}


export default RegistroService; 