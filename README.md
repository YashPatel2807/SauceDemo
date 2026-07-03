# Setup Instructions

## Project Overview

This project is an end-to-end automation framework built using Playwright and TypeScript. It follows the Page Object Model (POM) design pattern to ensure maintainability, scalability, and reusability.

## Tech Stack

- Playwright
- TypeScript

## Folder Structure

project/
│── pages/
│── tests/
│── utils/
│── playwright.config.ts
│── package.json
│── README.md

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later)
- Git

## Clone the Repository

```bash
git clone <repository-url>
```

## Go to the Project Directory

```bash
cd <project-folder>
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

## Run All Tests

```bash
npx playwright test
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Run a Specific Test

```bash
npx playwright test tests/login.spec.ts
```

## View the HTML Report

```bash
npx playwright show-report
```

## Author

Yash Patel
