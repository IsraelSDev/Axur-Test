import '../styles/registration.scss'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import loadingGif from "../assets/loading.gif";
import { useContext } from 'react';
import TermosContext from '../contexts/termosContext';

const Registration = () => {

    const [loading, isLoading] = useState(false);
    const termos = useContext(TermosContext);

    useEffect(() => {
        termos.setState({
            id: '1',
            status: 'active',
            links: ['1', '2', '3']
        })
        console.log(termos.state)
    }, [])



    return (
        <div className="container">
            <motion.div
                className="app"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0, transition: {
                        duration: 0
                    }
                }}
            >
                <div className='registration'>
                    <h1>Cadastro de termos</h1>
                    <br />
                    <h3>Aqui você pode cadastrar novos termos para realizar uma busca completa por ele</h3>
                    <motion.div
                        className='registration-box'
                        whileHover={{ scale: 1.3 }}
                    >
                        {
                            !loading ? (<div className="form-group">
                                <label htmlFor="title">Titulo
                                </label>
                                <br />
                                <input id='title' type="text" placeholder='Informe o termo a ser pesquisado.' />
                                <input type={"submit"} value="Cadastrar" />
                            </div>) : (<div className='loading-container'>
                                <img src={loadingGif} alt="loadin" />
                            </div>)
                        }
                    </motion.div>
                </div>
            </motion.div >
        </div>
    )
}


export default Registration