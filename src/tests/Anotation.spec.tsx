import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import Anotation from "../components/Anotation/Anotation";
import "@testing-library/jest-dom";

beforeEach(() => render(<Router>
    <Anotation />
</Router>
))

describe("Testes e Renderização de componentes", () => {
    it("Lista de anotação está renderizada", () => {
        const list = screen.getByTestId("list-anotation");
        expect(list).toBeInTheDocument();
    })
})
