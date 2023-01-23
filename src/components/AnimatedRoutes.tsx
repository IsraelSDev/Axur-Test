import Home from "../pages/Home";
import Registration from "../pages//Registration";
import Query from "../pages/Query";
import { Route, Routes, useLocation, Navigate, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to={"/Dashboard"} />} />
        <Route path="/Dashboard" element={<Home />} />
        <Route path="/Registro" element={<Registration />} />
        <Route path="/Consulta" element={<Query />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Nada aqui</h1>
              <Link to="/">Voltar</Link>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
