const baseUrl = 'http://zero.webappsecurity.com/index.html'

declare namespace Cypress {
	interface Chainable {
		visitHomepage(): Chainable<Element>
	}
}

Cypress.Commands.add('visitHomepage', () => {
	cy.visit(baseUrl)
})
