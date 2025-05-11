var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - users
 *     summary: Get a list of users
 *     description: Fetches a list of users from the system.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique ID of the user
 *                   name:
 *                     type: string
 *                     description: The name of the user
 *                   email:
 *                     type: string
 *                     description: The email of the user
 *       500:
 *         description: Internal Server Error
 */

// Mock data for users
const mockData = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  },
  {
    "id": 3,
    "name": "Michael Johnson",
    "email": "michaelj@example.com"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emilydavis@example.com"
  },
  {
    "id": 5,
    "name": "Chris Lee",
    "email": "chrislee@example.com"
  }
];

// GET /users route
router.get('/', function(req, res, next) {
  // Return mock data as JSON
  res.json(mockData);
});

module.exports = router;
