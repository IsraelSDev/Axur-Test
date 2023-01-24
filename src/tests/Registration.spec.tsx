import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Registration from "../pages/Registration";
import axios from 'axios';

jest.mock("axios");

beforeEach(() => render(<Router>
    <Registration />
</Router>
))

describe("Teste Registro Component", () => {

    it("Renderização do Componente", () => {
        expect(screen.getByText("Cadastro de termos")).toBeTruthy();
    })

    it("Verifica se o campo de cadastro foi carregado", () => {
        const registrateInput = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        expect(registrateInput).toBeInTheDocument();
    })


    it("Valida a chamada do serviço de cadastro", () => {

        const regButton = screen.getByTestId("cad-button");
        const inputTermo = screen.getByPlaceholderText("Informe o termo a ser pesquisado.")
        userEvent.type(inputTermo, "security");
        userEvent.click(regButton);
        expect(regButton).toBeTruthy();
        expect(inputTermo).toBeTruthy();

    })

    it("Valida o funcionamento da função de Cadastro", async () => {
        const inputCadastro = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        const buttonCad = screen.getByTestId("cad-button");
        userEvent.type(inputCadastro, "Carro");
        userEvent.click(buttonCad);
        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledTimes(1);
        })
    })
    it("Verifica a renderização dos componentes de cadastro", () => {

        const title = screen.getByText("Cadastro de termos");
        const registrateButton = screen.getByTestId("cad-button");
        const titlePanel = screen.getByText("Titulo");
        expect(title).toBeInTheDocument();
        expect(registrateButton).toBeInTheDocument();
        expect(titlePanel).toBeInTheDocument();

    })


    it("Valida a função de preenchimento", () => {
        const inputCadastro = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        userEvent.type(inputCadastro, "Carro");
        expect(inputCadastro).toBeInTheDocument();
        expect(screen.getByDisplayValue('Carro')).toBeInTheDocument();
    })

    it("Valida a limpeza do Campo", () => {
        const inputText = screen.getByPlaceholderText("Informe o termo a ser pesquisado.");
        const btnCad = screen.getByTestId("cad-button");
        userEvent.type(inputText, "Alguma coisa");
        expect(screen.getByDisplayValue("Alguma coisa")).toBeTruthy()
        userEvent.type(inputText, "");
        expect(btnCad).toHaveProperty("disabled");
        expect(inputText).toBeEmptyDOMElement();
    })

    it("Valida a tela de Sucesso", async () => {
        const mAxiosPost = jest.mocked(axios.post);
        mAxiosPost.mockImplementation(() => {
            return Promise.resolve({
                status: 200,
                data: {
                    id: '30vbllyb'
                }
            })
        });

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
})