# Playwright Generative AI Automation Framework

## Overview

This project demonstrates an AI-assisted automation testing framework built using Playwright and Generative AI (Playwright MSP) capabilities.

The framework was created by leveraging Generative AI to accelerate test creation, improve productivity, and reduce manual effort in automation development.

---

## Key Approach Used

### AI-Driven Test Generation

A reference file named:

```text
textcontext/webcontext.txt
```

Prompt For Test Cases as below -

Generate playwright test for following scenario-
Test 1 -
1. Go to 'https://www.saucedemo.com/'
2. use one of the username from list below accepted username are: and use password as 'secret_sauce'
3. click on login
4. verify 'swag lab title' after login

Test 2 -
1. Go to 'https://www.saucedemo.com/'
2. use one of the username from list below accepted username are: and use password as 'secret_sauce'
3. click on login
4. sauce labs bolt t-shirt add to cart
5. go to cart and click on checkout button
6. enter first name, last name, zip/postal code
7. click on continue
8. click on finish on checkout: Overview page

was provided as contextual input for GitHub Copilot.

Using this context, GitHub Copilot generated automation test cases dynamically.

The generated tests were:

* Executed repeatedly
* Debugged and re-run until all tests passed successfully
* Refined for stability and reliability

---

## Framework Enhancement

Once the generated tests were stable and passing successfully, the framework was converted into a proper:

* Page Object Model (POM) Structure

This improved:

* Maintainability
* Scalability
* Readability
* Reusability of test components

The tests were then re-executed after POM conversion to validate framework stability.

---

## Benefits Achieved

By using Generative AI with Playwright automation:

* Faster automation development
* Reduced manual scripting effort
* Improved productivity in daily testing activities
* Rapid test generation and stabilization

### Estimated Productivity Improvement

This approach helped save approximately:

# 70% of daily testing effort and automation development time

compared to traditional manual automation scripting approaches.

---

## Tech Stack

* Playwright
* TypeScript / JavaScript
* GitHub Copilot
* Generative AI Assisted Development
* Page Object Model (POM)

---

## Project Highlights

* AI-assisted test generation
* Context-driven automation development
* Automated test stabilization through reruns
* POM-based scalable framework design
* Faster delivery of automation coverage

---

## Execution Command

```bash
npx playwright test
```

---

## Future Enhancements

* CI/CD integration
* Advanced reporting
* Cross-browser parallel execution
* AI-assisted self-healing automation
* Dynamic test data generation

---

## Author

Developed by leveraging Playwright + Generative AI based automation approach.
