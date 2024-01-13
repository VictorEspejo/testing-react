//eslint-globals cy

describe("Página inicial", () => {
  it("Carga correctamente", () => {
    cy.visit("/");
  });

  it("Contiene el título correcto", () => {
    cy.visit("/");
    cy.contains("div", "bulbasaur");
  });
});
