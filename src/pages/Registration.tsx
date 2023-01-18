import '../styles/registration.scss'
import { motion } from "framer-motion"

const Registration = () => {
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
                    REGISTRO
                </div>
            </motion.div>
        </div>
    )
}


export default Registration