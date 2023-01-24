import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar";

beforeEach(() => render(<Router>
    <Home />
</Router>
))

describe("Teste Home Component", () => {

    it("Renderização do Componente", () => {
        expect(screen.getByText("Seu buscador de termos")).toBeTruthy();
    })

    it("Testar navegações através do Menu", async () => {
        render(<Router>
            <NavBar />
        </Router>
        )
        const menuRouteButton = screen.getByAltText('homeIcon');
        userEvent.click(menuRouteButton);
        render(<Router>
            <Home />
        </Router>)
        expect(screen.getAllByText('O que posso fazer?')).toBeTruthy();
    })

    it("Verifica se o Título da aplicação foi carregado", () => {
        const title = screen.getByText("Seu buscador de termos");
        expect(title).toBeInTheDocument();
    })
})