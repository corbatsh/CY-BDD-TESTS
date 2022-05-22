const baseUrl = 'http://zero.webappsecurity.com/index.html'
const loginPageUrl = 'http://zero.webappsecurity.com/login.html'

declare namespace Cypress {
	interface Chainable {
		visitHomepage(): Chainable<Element>

		visitLoginpage(): Chainable<Element>
	}
}

Cypress.Commands.add('visitHomepage', () => {
	cy.visit(baseUrl)
})

Cypress.Commands.add('visitLoginpage', () => {
	cy.visit(loginPageUrl)
})
