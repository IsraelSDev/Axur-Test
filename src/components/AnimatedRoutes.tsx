import Home from '../pages/Home';
import Registration from "../pages//Registration"
import Query from "../pages/Query"
import { useState, useContext } from 'react';
import TermosContext from "../contexts/termosContext"
import { Route, Routes, useLocation, Navigate, Link } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {

    const termosContext = useContext(TermosContext);

    const location = useLocation();
    const [state, setState] = useState(termosContext.state)

    return (
        <AnimatePresence>
            <TermosContext.Provider value={{ state, setState }} >

                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Navigate to={"/Dashboard"} />} />
                    <Route path='/Dashboard' element={<Home />} />
                    <Route path='/Registro' element={<Registration />} />
                    <Route path='/Consulta' element={<Query />} />

                    <Route path='*' element={
                        <div>
                            <h1>Nada aqui</h1>
                            <Link to="/">Voltar</Link>
                        </div>} />
                </Routes>
            </TermosContext.Provider>
        </AnimatePresence>
    )
}

export default AnimatedRoutes