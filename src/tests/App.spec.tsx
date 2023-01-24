import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Anotation from "../components/Anotation/Anotation";
import axios from 'axios';
import "@testing-library/jest-dom";


jest.mock("axios");

describe("Testes e Renderização de componentes", () => {

    it("Componente NavBar existe", () => {
        render(<Router>
            <NavBar />
        </Router>
        )
        expect(screen.getByAltText('homeIcon')).toBeTruthy();
    })

    it("Mudar a rota ao clicar nas opções do menu", () => {
        render(<Router>
            <NavBar />
        </Router>
        )
        const menuRouteButton = screen.getByAltText('homeIcon');
        userEvent.click(menuRouteButton);
        render(<Router>
            <Home />
        </Router>)
        expect(screen.getByText('O que posso fazer?')).toBeTruthy();
    })

    it("Ir para a rota de Cadastro ao clicar no ícone", () => {
        render(<Router>
            <NavBar />
        </Router>)
        const registroButton = screen.getByAltText('addIcon');
        userEvent.click(registroButton);
        render(<Router>
            <Registration />
        </Router>)
        expect(screen.getByText('Cadastro de termos')).toBeTruthy();
    })


    it("Verifica se o campo de cadastro foi carregado", () => {
        render(<Router>
            <Registration />
        </Router>)
        const registrateInput = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        expect(registrateInput).toBeInTheDocument();
    })

    it("Verifica se o Botão de cadastrar foi carregado", () => {
        render(<Router>
            <Registration />
        </Router>)
        const title = screen.getByText("Cadastro de termos");
        const registrateButton = screen.getByTestId("cad-button");
        const titlePanel = screen.getByText("Titulo");

        expect(title).toBeInTheDocument();
        expect(registrateButton).toBeInTheDocument();
        expect(titlePanel).toBeInTheDocument();
    })

    it("Verifica se o Título da aplicação foi carregado", () => {
        render(<Router>
            <Home />
        </Router>)
        const title = screen.getByText("Seu buscador de termos");
        expect(title).toBeInTheDocument();
    })


    it("Valida a função de preenchimento", () => {
        render(<Router>
            <Registration />
        </Router>)
        const inputCadastro = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        userEvent.type(inputCadastro, "Carro");
        expect(inputCadastro).toBeInTheDocument();
        expect(screen.getByDisplayValue('Carro')).toBeInTheDocument();

    })

    it("Valida função de Cadastro", async () => {
        render(<Router>
            <Registration />
        </Router>)

        const inputCadastro = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        const buttonCad = screen.getByTestId("cad-button");
        userEvent.type(inputCadastro, "Carro");
        userEvent.click(buttonCad);
        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledTimes(1);
        })
    })

    it("Valida a chama do serviço", () => {
        render(<Router>
            <Registration />
        </Router>)

        const regButton = screen.getByTestId("cad-button");
        const inputTermo = screen.getByPlaceholderText("Informe o termo a ser pesquisado.")
        userEvent.type(inputTermo, "security");
        userEvent.click(regButton);

        expect(regButton).toBeTruthy();
        expect(inputTermo).toBeTruthy();

    })

    it("Valida a limpeza do Campo", () => {
        render(<Router>
            <Registration />
        </Router>)

        const inputText = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        const btnCad = screen.getByTestId("cad-button");
        userEvent.type(inputText, "Alguma coisa");
        expect(screen.getByDisplayValue("Alguma coisa")).toBeTruthy()
        userEvent.type(inputText, "");
        expect(btnCad).toHaveProperty("disabled");
        expect(inputText).toBeEmptyDOMElement();
    })

    it("Valida a tela de Sucesso", async () => {
        render(<Router>
            <Registration />
        </Router>)
        axios.post.mockImplementation(() => {
            return Promise.resolve({
                status: 200,
                data: {
                    id: '30vbllyb'
                }
            })
        })
        const inputText = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        const btnCad = screen.getByTestId("cad-button");
        userEvent.type(inputText, "security");
        userEvent.click(btnCad);
        expect(screen.getByTestId("loading-gif")).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByTestId("sucesso-cadastro")).toBeInTheDocument();
        })
        const resetForm = screen.getByTestId('reset-btn');
        userEvent.click(resetForm);
        expect(screen.getByPlaceholderText("Informe o termo a ser pesquisado.")).toBeInTheDocument();
    })

    it("Lista de anotação está renderizada", () => {
        render(<Router>
            <Anotation />
        </Router>)

        const list = screen.getByTestId("list-anotation");
        expect(list).toBeInTheDocument();
    })
}) 