import "../styles/registration.scss";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import loadingGif from "../assets/loading.gif";
import { useContext } from "react";
import TermosContext from "../contexts/termosContext";

const Registration = () => {

  const [loading, isLoading] = useState<boolean>();
  const [termo, setTermo] = useState<string>("")
  const termos = useContext(TermosContext);
  const [termosCount, setTermosCount] = useState<number>(1);
  const [empty, isEmpty] = useState<boolean>(true);

  const handleTermos: Function = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value);
    if (e.target.value.trim() !== '') {
      isEmpty(false);
    } else {
      isEmpty(true);
    }
  }
  const addTermos: Function = () => {
    setTermosCount(termosCount + 1);
    termos.state.push({
      id: termosCount,
      termo: termo,
      status: "cadastrado",
      links: []
    })
    alert("O termo '" + termo + "' foi cadastrado com Sucesso!")
    sessionStorage.setItem('list-termos', JSON.stringify(termos.state));
  }

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
        <div className="registration">
          <h1>Cadastro de termos</h1>
          <br />
          <h3>
            Aqui você pode cadastrar novos termos para realizar uma busca
            completa por ele
          </h3>
          <motion.div className="registration-box" whileHover={{ scale: 1.3 }}>
            {!loading ? (
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <br />
                <input
                  id="title"
                  type="text"
                  placeholder="Informe o termo a ser pesquisado."
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => { handleTermos(e) }
                  }
                />
                <input disabled={empty} type={"submit"} value="Cadastrar" onClick={(e: React.MouseEvent) => {
                  addTermos()
                }} />
              </div>
            ) : (
              <div className="loading-container">
                <img src={loadingGif} alt="loading" />
              </div>

            )}
            <div>
              Olá
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Registration;
