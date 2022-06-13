const feedbackPageUrl = 'http://zero.webappsecurity.com/feedback.html'
const nameInput = '#name'
const emailInput = '#email'
const subjectInput = '#subject'
const commentInput = '#comment'
const sendFeedbackButton = 'input[name="submit"]'

declare namespace Cypress {
	interface Chainable {
		visitFeedbackPage(): Chainable<Element>
		fillFeedbackForm(
			name: string,
			email: string,
			subject: string,
			comment: string
		): Chainable<Element>
		sendFeedback(): Chainable<Element>
	}
}

Cypress.Commands.add('visitFeedbackPage', () => {
	cy.visit(feedbackPageUrl)
})

Cypress.Commands.add('fillFeedbackForm', (name, email, subject, comment) => {
	cy.get(nameInput).type(name)
	cy.get(emailInput).type(email)
	cy.get(subjectInput).type(subject)
	cy.get(commentInput).type(comment)
})

Cypress.Commands.add('sendFeedback', () => {
	cy.get(sendFeedbackButton).click()
})
