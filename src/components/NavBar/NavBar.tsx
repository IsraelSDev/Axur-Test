import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/casa.webp";
import addIcon from "../../assets/adicionar.webp";
import searchIcon from "../../assets/search.webp";
import Anotation from "../Anotation/Anotation"
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <aside className="NavBar" data-testid="menu" >
      <ul>
        <Link to="/">
          <li>
            <motion.div
              className="app_box"
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                rotate: -50,
                borderRadius: "100%",
              }}
            >
              <img src={homeIcon} alt="homeIcon" />
            </motion.div>
          </li>
        </Link>
        <Link to="/Registro">
          <li>
            <motion.div
              className="app_box"
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <img src={addIcon} alt="addIcon" />
            </motion.div>
          </li>
        </Link>
        <Link to="/Consulta">
          <li>
            <motion.div
              className="app_box"
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <img src={searchIcon} alt="searchIcon" />
            </motion.div>
          </li>
        </Link>
        <li>
          <Anotation />
        </li>
      </ul>
    </aside>
  );
};

export default NavBar;
