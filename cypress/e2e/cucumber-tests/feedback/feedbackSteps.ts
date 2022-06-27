import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I open feedback page', () => {
	cy.visitFeedbackPage()
})

When('I fill feedback form', () => {
	cy.fixture('feedback').then((data) => {
		cy.fillFeedbackForm(data.name, data.email, data.subject, data.comment)
	})
})

And('i click send button', () => {
	cy.sendFeedback()
})
