import React from "react";
import "../styles/registration.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import loadingGif from "../assets/loading.gif";
import { useContext } from "react";
import TermosContext from "../contexts/termosContext";
import RegistroService from "../services/RegistroService";
import { resultPesquisaI } from "../models/cadastroTypes";

const Registration: React.FunctionComponent = () => {

  const [loading, isLoading] = useState<boolean>();
  const [resultScreen, showResultScreen] = useState<boolean>(false);
  const [resultPesquisa, handleResultPesquisa] = useState<resultPesquisaI>({
    id: 0,
    termo: ''
  });
  const [termo, setTermo] = useState<string>("")
  const termos = useContext(TermosContext);
  const [empty, isEmpty] = useState<boolean>(true);

  const handleTermos: Function = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value);
    if (e.target.value.trim() !== '') {
      isEmpty(false);
    } else {
      isEmpty(true);
    }
  }
  const addTermos = () => {
    isLoading(true);
    const cadTermo = RegistroService({ 'keyword': termo });
    cadTermo.then(value => {
      if (value.status === 200) {
        let newTermosList: any = {
          id: value.data?.id,
          termo: termo,
          status: "cadastrado",
        };
        handleResultPesquisa({
          id: value.data.id,
          termo: termo
        });
        showResultScreen(true);
        termos.handleListTermos([...termos.listTermos, newTermosList]);
      }
    }).catch(error => {
      isLoading(false);
      alert(error.response?.data?.message);
    }).finally(() => {
      isLoading(false);
    });
  }

  const reset: Function = () => {
    isLoading(false);
    showResultScreen(false);
    setTermo('');
    handleResultPesquisa({
      id: 0,
      termo: ''
    });

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
        <div className="registration" data-testid="registro">
          <h1>Cadastro de termos</h1>
          <br />
          <h3>
            Aqui você pode cadastrar novos termos para realizar uma busca
            completa por ele
          </h3>
          <motion.div className="registration-box">
            {!loading && !resultScreen ? (
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
                  value={termo}
                />
                <input disabled={empty} data-testid="cad-button" type={"submit"} value="Cadastrar" onClick={() => {
                  addTermos()
                }} />
              </div>
            ) : loading && !resultScreen ? (
              <div className="loading-container" data-testid="loading-gif">
                <img src={loadingGif} alt="loading" />
              </div>
            ) : (
              <div className="result-screen">
                <h1 >Cadastrada com Sucesso!!!</h1>
                <table className='table-list'>
                  <thead>
                    <tr>
                      <td data-testid="sucesso-cadastro">
                        Palavra pesquisada &nbsp;&nbsp;
                      </td>
                      <td>
                        &nbsp;&nbsp;Código da pesquisa
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2>
                          {resultPesquisa?.termo}
                        </h2>
                      </td>
                      <td>
                        <h2>
                          {resultPesquisa?.id}
                        </h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button data-testid="reset-btn" onClick={() => reset()}>Novo Cadastro</button>
                <p>
                  &#x1F448; Também foi adicionada essas informações ao seu bloco de notas
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div >
    </div >
  );
};

export default Registration;