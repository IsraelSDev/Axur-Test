import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Registration from "../pages/Registration";
import "@testing-library/jest-dom";

beforeEach(() => render(<Router>
    <NavBar />
</Router>
))

describe("Test NavBar Component", () => {

    it("Renderização do Componente", () => {
        expect(screen.getByAltText('homeIcon')).toBeTruthy();
    })

    it("Testar navegações através do Menu", async () => {
        const registroButton = screen.getByAltText('addIcon');

        userEvent.click(registroButton);
        render(<Router>
            <Registration />
        </Router>)
        expect(screen.getByText('Cadastro de termos')).toBeTruthy();
    })

})