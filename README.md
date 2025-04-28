# cypressDemo
This is Cypress code

# Dependencies to install:
npm install --save-dev mocha-allure-reporter allure-commandline

# Script for test execution:
browser:chrome": "npx cypress run --browser=chrome --headed --spec cypress/e2e/*.cy.js --reporter mocha-allure-reporter",

# Allure report generate script:
"report:allure": "allure generate allure-results --clean -o allure-report && allure open allure-report"


#Run allure report 
1. npm run browser:chrome
2. npm run report:allure


