import { idToSearchI } from "../models/buscarTypes";
import axios from "axios"

const BuscarService = async ({ id }: idToSearchI) => {
    // return await axios.get(`${process.env.REACT_APP_SEND_DATA}/${id}`)
    return await axios.get('http://testapp.axreng.com:4567/crawl/' + id);
}

export default BuscarService;