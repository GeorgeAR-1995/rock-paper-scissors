//visit index.html
describe("Rock Paper Scissors Game", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  //check buttons work and display choice correctly
  it("should display user choice and computer choice after clicking rock", () => {
    cy.get("#rock").click();
    cy.get("#user-option").should("have.text", "Rock");
    cy.get("#computer-option").should("not.have.text", "");
  });

  it("should display user choice and computer choice after clicking paper", () => {
    cy.get("#paper").click();
    cy.get("#user-option").should("have.text", "Paper");
    cy.get("#computer-option").should("not.have.text", "");
  });

  it("should display user choice and computer choice after clicking scissors", () => {
    cy.get("#scissors").click();
    cy.get("#user-option").should("have.text", "Scissors");
    cy.get("#computer-option").should("not.have.text", "");
  });

  //check results display correctly
  it("should display the correct result when user wins", () => {
    cy.get("#rock").click();
    cy.get("#computer-option").then(($computerChoice) => {
      if ($computerChoice.text() === "Scissors") {
        cy.get("#result").should("have.text", "You win!");
      } else {
        cy.get("#result").should("not.have.text", "You win!");
      }
    });
  });

  it("should display the correct result when user loses", () => {
    cy.get("#rock").click();
    cy.get("#computer-option").then(($computerChoice) => {
      if ($computerChoice.text() === "Paper") {
        cy.get("#result").should("have.text", "You lose!");
      } else {
        cy.get("#result").should("not.have.text", "You lose!");
      }
    });
  });

  it("should display the correct result when its a draw", () => {
    cy.get("#rock").click();
    cy.get("#computer-option").then(($computerChoice) => {
      if ($computerChoice.text() === "Rock") {
        cy.get("#result").should("have.text", "It is a draw!");
      } else {
        cy.get("#result").should("not.have.text", "It is a draw!");
      }
    });
  });
});
