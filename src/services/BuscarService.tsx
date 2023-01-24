import { idToSearchI } from "../models/buscarTypes";
import axios from "axios"

const BuscarService = async ({ id }: idToSearchI) => {
    return await axios.get(`${process.env.REACT_APP_SEND_DATA}/${id}`)
}

export default BuscarService;