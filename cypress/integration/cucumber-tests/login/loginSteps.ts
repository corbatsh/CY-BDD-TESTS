import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
	cy.visitHomepage()
})

When('I submit login', () => {
	cy.visitLoginpage()
	cy.fixture('loginData').then(({ username, password }) => {
		cy.login(username, password)
	})
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})
