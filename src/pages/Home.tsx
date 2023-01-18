import "../styles/Home.scss"
import { motion } from "framer-motion"
import digitandoImage from "../assets/difitando.webp"

const Home = () => {
    return (<>
        <div className="container">
            <h1>Seu buscador de termos</h1>
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
                <div className="app_container">
                    <img src={digitandoImage} alt="digitando" />
                    <motion.div
                        className='app_box'
                        whileHover={{ scale: 1.3 }}
                    >
                        <h2>O que posso fazer? </h2>
                        <br />
                        <br />
                        <h3> - Você pode cadastrar uma solicitação de inspeção de termos.</h3>
                        <br />
                        <h3> - E também acompanhar inspeções já cadastradas, através de seu código de identificação.</h3>
                    </motion.div>
                </div>
            </motion.div >
        </div >
    </>)
}


export default Home