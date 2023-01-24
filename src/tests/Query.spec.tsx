import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Query from "../pages/Query";

import axios from 'axios';
import userEvent from "@testing-library/user-event";


jest.mock("axios");


beforeEach(() => render(<Router>
    <Query />
</Router>
))

describe("Testes e Renderização da Aplicação", () => {
    it("Renderiza o componente de Busca", () => {
        expect(screen.getByText("Consulta de termos")).toBeTruthy();
    })

    it("Valida a chamada do serviço de Busca", async () => {
        const mAxiosGet = jest.mocked(axios.get);
        mAxiosGet.mockImplementation(() => {
            return Promise.resolve({
                status: 200,
                data: {
                    id: "30vbllyb",
                    status: "active",
                    urls: [
                        "http://hiring.axreng.com/",
                        "index2.html",
                        "http://hiring.axreng.com/",
                        "htmlman1/chcon.1.html"
                    ],
                }
            })
        });
        const inputText = screen.getByPlaceholderText("Informe o ID para ver os resultados.");

        const btnCad = screen.getByTestId("btn-busca");

        userEvent.type(inputText, "12asdw12");
        userEvent.click(btnCad);
        expect(screen.getByTestId("loading-gif")).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText("Resultados:")).toBeInTheDocument();
        })
        const resetForm = screen.getByTestId('reset-btn');
        userEvent.click(resetForm);
        expect(screen.getByPlaceholderText("Informe o ID para ver os resultados.")).toBeInTheDocument();

    })
})
