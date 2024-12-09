# Social Network API

## Description
A REST API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, MongoDB for the database, and Mongoose ODM for data modeling.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Questions](#questions)

## Installation
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Make sure MongoDB is installed and running on your machine
4. Start the server
   ```bash
   npm start
   ```

## Usage
The API allows users to:
- Create, read, update, and delete users
- Add and remove friends from a user's friend list
- Create, read, update, and delete thoughts
- Create and delete reactions to thoughts

## API Routes

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:userId` - Get single user by ID
- POST `/api/users` - Create a new user
- PUT `/api/users/:userId` - Update a user
- DELETE `/api/users/:userId` - Delete a user

### Friends
- POST `/api/users/:userId/friends/:friendId` - Add a friend
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend

### Thoughts
- GET `/api/thoughts` - Get all thoughts
- GET `/api/thoughts/:thoughtId` - Get single thought by ID
- POST `/api/thoughts` - Create a new thought
- PUT `/api/thoughts/:thoughtId` - Update a thought
- DELETE `/api/thoughts/:thoughtId` - Delete a thought

### Reactions
- POST `/api/thoughts/:thoughtId/reactions` - Create a reaction
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction

## Demo
[https://app.screencastify.com/v3/watch/GfVvKvmf5mt1YKi9CZAT]

## Technologies Used
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia (for testing)

## Questions
For any questions, please contact me:
- GitHub: (github.com/Mchance176)
- Email: (matt.chance176@gmail.com)