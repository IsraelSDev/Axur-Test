import "../styles/query.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import loadingGif from "../assets/loading2.gif";
import { useContext } from "react";
import TermosContext from "../contexts/termosContext";

const Query = () => {
  const [loading, isLoading] = useState(false);
  const [result, hasResult] = useState(false);

  const resetConsult = () => {
    isLoading(false);
    hasResult(false);
  };

  const termos = useContext(TermosContext);

  console.log(termos);

  return (
    <div className="container">
      <motion.div
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0,
          },
        }}
      >
        <div className="busca">
          <h1>Consulta de termos</h1>
          <br />
          <h3>
            Aqui você consulta o status e os resultados de consultas
            anteriormente cadastradas
          </h3>

          {!loading ? (
            <div className="container">
              {result ? (
                <div className="result-container">
                  <h1>Resultados:</h1>
                  <div className="result-box"></div>
                  <button onClick={resetConsult}>Nova Consulta</button>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="id">Chave / ID</label>
                  <br />
                  <input
                    id="id"
                    type="text"
                    placeholder="Informe o ID para ver os resultados."
                    required
                  />
                  <input type={"submit"} value="Consultar" />
                </div>
              )}
            </div>
          ) : (
            <div className="loading-container">
              <img src={loadingGif} alt="loadin" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Query;
