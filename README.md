# Contact Management System

## Project Description

This Contact Management System is a full-stack web application built using the **MERN** stack (MongoDB, Express.js, React, Node.js). It allows users to manage their contacts by adding, editing, deleting, and viewing contact information. The application supports basic CRUD operations and stores contact details in a MongoDB database.

### Key Features:
- **Add new contacts** with essential details (name, phone, email, etc.).
- **Edit existing contacts** to keep information up-to-date.
- **Delete contacts** when no longer needed.
- **Search functionality** to filter contacts based on name or email.
- **Responsive UI** built with React and styled using Tailwind CSS.
- **API endpoints** created with Express.js to handle contact data operations.

## Tech Stack:
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication (Optional):** JWT (JSON Web Tokens)

## Major Technical Decisions:
- **MERN Stack**: Chose MongoDB, Express.js, React.js, and Node.js for a modern full-stack JavaScript development experience.
- **MongoDB**: Used for its flexibility in handling unstructured data, especially useful for contact information that may vary across users.
- **JWT Authentication**: If implemented, ensures secure user authentication and session management.

## App Workflow:
1. **Frontend (React):**
   - Users interact with the application through the frontend. React is used to render components such as ContactList, AddContact, EditContact, etc.
   - State management is handled using **useState** and **useEffect** hooks.
   - Axios is used to make API requests to the backend.

2. **Backend (Node.js/Express):**
   - The backend exposes API routes for creating, reading, updating, and deleting contacts (CRUD operations).
   - Each route corresponds to a controller that interacts with the MongoDB database.

3. **Database (MongoDB):**
   - MongoDB stores contact information in the form of documents in the **contacts** collection.
   - Schema is defined to enforce the structure of contact documents (e.g., name, email, phone).

## Database Schema

```javascript
const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
# Setup Instructions for Contact Management System

This document provides the necessary steps to set up and run the Contact Management System on your local machine.

## Prerequisites:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (Either locally installed or MongoDB Atlas for cloud-based database)
- A code editor like **Visual Studio Code**

## Setup Steps

### Step 1: Clone the Repository

Start by cloning the repository to your local machine. Open your terminal and run:

```bash
git clone <repository-url>
