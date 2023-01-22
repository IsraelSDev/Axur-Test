import "../styles/query.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";
import loadingGif from "../assets/loading2.gif";
import { useContext } from "react";
import TermosContext from "../contexts/termosContext";

const Query: React.FunctionComponent = () => {
  const [loading, isLoading] = useState<boolean>(false);
  const [result, hasResult] = useState<boolean>(true);
  const [empty, isEmpty] = useState<boolean>(true);
  const [id, setID] = useState<string>("")

  const resetConsult = () => {
    isLoading(false);
    isEmpty(true);
    hasResult(false);
  };

  const handleID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value);
    if (e.target.value.trim() !== '') {
      isEmpty(false);
    } else {
      isEmpty(true);
    }
  }

  const getById = () => {
    isLoading(true);
    isEmpty(true);
    alert("Chamando")
  }

  const termos = useContext(TermosContext);


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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleID(e)
                    }}
                  />
                  <input type={"submit"} value="Consultar" disabled={empty} onClick={getById} />
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
