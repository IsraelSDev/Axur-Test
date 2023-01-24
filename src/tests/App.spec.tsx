import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";


describe("Testes e Renderização da Aplicação", () => {
    it("Renderiza o APP principal", () => {
        render(<App />)
        expect(screen.getByTestId("app")).toBeTruthy();
    })
})
