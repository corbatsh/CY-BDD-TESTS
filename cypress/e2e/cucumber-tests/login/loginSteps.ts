import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
	cy.visitLoginpage()
})

When('I fill username with {string}', (username) => {
	cy.fillUsername(username)
})

And('I fill password with {string}', (password) => {
	cy.fillPassword(password)
})

And('I click submit login', () => {
	cy.signIn()
})

Then('I should see homepage', () => {
	cy.shouldSeeHomepage()
})

Then('I should see error message', () => {
	cy.shouldShowErrorMessage()
})
