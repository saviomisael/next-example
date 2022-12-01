const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    './**/*.(test|spec).[tj]s?(x)'
  ],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/styles/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/**.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/']
}

module.exports = createJestConfig(customJestConfig)
