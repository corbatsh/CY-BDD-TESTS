import { defineConfig } from 'cypress'

export default defineConfig({
	video: false,
	animationDistanceThreshold: 20,
	defaultCommandTimeout: 4000,
	pageLoadTimeout: 10000,
	watchForFileChanges: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
		excludeSpecPattern: ['*.ts', '*.md'],
		specPattern: '**/*.{feature,features}',
	},
})
