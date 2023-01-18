import "../styles/Home.scss"
import { motion } from "framer-motion"

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
                    <motion.div
                        className='app_box'
                        whileHover={{ scale: 1.3 }}
                    >
                        <iframe width={'100%'} height={'100%'} src="https://github.com/IsraelSDev">

                        </iframe>
                    </motion.div>
                    <motion.div
                        className='app_box'
                        whileHover={{ scale: 1.3 }}
                    >
                        <iframe width={'100%'} height={'100%'} src="https://www.linkedin.com/in/israel-soares-0769191b2/"></iframe>
                    </motion.div>
                </div>
            </motion.div >
        </div>
    </>)
}


export default Home