import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";
import Registration from "../pages/Registration";


describe("Teste - Aplicação e seus Components", () => {
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

    it("")

})