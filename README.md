# JavaScript Promises Project

This project demonstrates the use of JavaScript promises to manage asynchronous operations. It simulates an inventory management system for an online store, including checking inventory, processing payments, and shipping orders. The project also covers common patterns and best practices when working with promises.

## Project Overview

The project consists of the following components:
- `app.js`: JavaScript file containing the main logic of the project.
- `library.js`: JavaScript file containing utility functions for inventory management, payment processing, and order shipping.
- `index.html`: HTML file to demonstrate the functionality of the project.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Open `index.html` in your web browser to see the project in action.

## JavaScript Promises Overview

### 1. Basic Concepts
JavaScript promises are objects representing the eventual completion or failure of an asynchronous operation. They allow us to handle asynchronous code more elegantly and avoid callback hell.

### 2. Creating Promises
Promises can be created using the `Promise` constructor. They take a function (executor) as an argument, which is called immediately and receives two functions: `resolve` and `reject`.

### 3. Promise States
Promises can be in one of three states:
- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.

### 4. Chaining Promises
Promises can be chained using `.then()` and `.catch()` methods. This allows us to perform sequential operations and handle both success and failure cases gracefully.

### 5. Error Handling
Using `.catch()` method at the end of a promise chain allows us to catch any errors that occur at any stage of the chain.

### 6. Promise.all()
`Promise.all()` takes an array of promises as input and returns a single promise that resolves when all promises in the array have resolved, or rejects if any of the promises reject.

## Project Structure

The `app.js` file contains the implementation of the project. It demonstrates the use of promises for inventory management, payment processing, and order shipping. The `library.js` file provides utility functions for these operations.

## Acknowledgements

This project is inspired by the curriculum of [Codecademy](https://www.codecademy.com/).

