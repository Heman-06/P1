Answers of Questions: 

1. How Can You Share Functionality Across a Component Tree?
Context API: What It Does: It lets you share data or functions across your entire app without passing props down through each component.
How To Use:
 1. Create a Context: Set up a context that holds the data or functions you want to share.
 2. Provide Context: Wrap your main app or a part of it with a provider component that supplies this context.
 3. Consume Context: Any component within the provider can access this shared data or functions.

2. Why is useState Good for Handling State in Complex Components?
1. Local State Management:  useState manages state within a component, so each component can have its own state. It keeps state management simple and specific to each component.
2. Easy State Updates: useState provides an easy way to update the state and refresh the UI. It allows you to change state values easily and ensures the UI updates automatically.
3. Automatic Re-renders: When state changes, React automatically re-renders the component.It keeps the UI in sync with the state without needing extra code.
4. Clean Code: useState helps you keep your code clean and straightforward.It avoids the complexity of older state management methods and makes your code easier to understand.


## Overview
This project is a RESTful API built using Node.js and Express.js to manage cards. The API allows users to create and retrieve cards, which represent different sections of a project.

## Project Structure

- **/front**: Contains the frontend codes.
- **/back**: Contains the backend code including API logic and models.

## Backend Setup

### Requirements
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository>

## Frontend Setup

### Requirements
- React

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository>

2. npm install

3. npm start   