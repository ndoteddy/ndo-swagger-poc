var express = require('express');
var router = express.Router();

var db = require('../queries');

/**
 * @openapi
 * components:
 *   schemas:
 *     Tshirt:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique ID of the tshirt
 *         name:
 *           type: string
 *           description: The name of the tshirt
 *         picture:
 *           type: string
 *           description: The picture URL of the tshirt
 *         price:
 *           type: string
 *           description: The price of the tshirt
 *       required:
 *         - id
 *         - name
 *         - price
 */

/**
 * @openapi
 * /api/tshirt:
 *   get:
 *     tags:
 *       - tshirt
 *     summary: Returns a list of all t-shirts
 *     description: Fetches all t-shirts available in the database
 *     responses:
 *       200:
 *         description: An array of tshirts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tshirt'
 */
router.get('/api/tshirt', db.getAllTshirt);

/**
 * @openapi
 * /api/tshirt/{id}:
 *   get:
 *     tags:
 *       - tshirt
 *     summary: Returns a single t-shirt by its ID
 *     description: Fetches a t-shirt by its unique ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the tshirt
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single t-shirt
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tshirt'
 */
router.get('/api/tshirt/:id', db.getSingleTshirt);

/**
 * @openapi
 * /api/tshirt:
 *   post:
 *     tags:
 *       - tshirt
 *     summary: Creates a new t-shirt
 *     description: Adds a new t-shirt to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tshirt'
 *     responses:
 *       200:
 *         description: Successfully created a tshirt
 */
router.post('/api/tshirt', db.createTshirt);

module.exports = router;
