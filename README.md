# GL Playwright Automation Trello

## Overview

This project is designed to automate testing for Trello using Playwright. It provides a suite of tests to ensure the functionality and reliability of Trello's features.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/gl-playwright-automation-trello.git
    ```
2. Navigate to the project directory:
    ```sh
    cd gl-playwright-automation-trello
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Install Playwright browsers:
    ```sh
    npx playwright install --with-deps --force
    ```
5. Create a `.env` file in the root directory and add your environment variables:
    ```env
    TRELLO_EMAIL=your-email@example.com
    TRELLO_PASSWORD=your-password
    TRELLO_API_KEY=your-api-key
    TRELLO_API_TOKEN=your-api-token
    ```

## Running Tests

To run the tests locally, use the following command:
    ```
    npm run dev-run
    ```

## Using Docker
To run the tests in a Docker container, use Docker Compose:
    ```
    docker-compose up --build
    ```

## Using GitHub Actions
The tests are configured to run on GitHub Actions on every push and pull request to the main, master, and env-credentials branches. The workflow file is located at .github/workflows/playwright.yml.

## Test Results
Test results are stored in the test-results directory. The reports are generated in JSON, JUnit XML, and HTML formats.

* JSON Report: test-results/jsonReport.json
* JUnit Report: test-results/junitReport.xml
* HTML Report: test-results/htmlReport

## Project Configuration
The Playwright configuration file is located at `playwright.config.ts`. It includes settings for test directories, parallel execution, retries, and reporters.

## Writing Tests
Tests are located in the tests directory. The structure is organized by test type (API/UI) and feature (e.g., boards, login).

* Example test file: `tests/ui/login/specs/login-api.spec.ts`

## Environment Variables
Environment variables are loaded from the .env file using the dotenv package. Ensure that the .env file contains the necessary variables for the tests to run.    