const username_input = '#user_login'
const password_input = '#user_password'
const submit_button = 'input[name="submit"]'
const errorMessage = '.alert-error'
const accountSummaryHomepage = '#account_summary_tab'

declare namespace Cypress {
	interface Chainable {
		login(username: string, password: string): Chainable<Element>
		fillUsername(username: string): Chainable<Element>
		fillPassword(password: string): Chainable<Element>
		signIn(): Chainable<Element>
		shouldShowErrorMessage(): Chainable<Element>
		shouldSeeHomepage(): Chainable<Element>
	}
}
//
// Cypress.Commands.add('login', (username, password) => {
// 	cy.get('#user_login').type(username)
// 	cy.get('#user_password').type(password)
// 	cy.contains('Sign in').click()
// })

Cypress.Commands.add('fillUsername', (username) => {
	cy.get(username_input).type(username)
})

Cypress.Commands.add('fillPassword', (password) => {
	cy.get(password_input).type(password)
})

Cypress.Commands.add('signIn', () => {
	cy.get(submit_button).click()
})

Cypress.Commands.add('shouldSeeHomepage', () => {
	cy.get(accountSummaryHomepage).should('be.visible')
})

Cypress.Commands.add('shouldShowErrorMessage', () => {
	cy.get(errorMessage).contains('Login and/or password are wrong')
})
