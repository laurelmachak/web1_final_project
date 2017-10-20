var express = require('express');
var router = express.Router();

// require that points to the Reply Controller
var reply = require("../controllers/ReplyController.js");

// all routes to CRUD functions:

// Get all replies:
router.get('/', reply.list);

// Get single reply by id:
router.get('/replies/show/:id', reply.show);

// Create a reply:
router.get('/replies/create', reply.create);

// Save reply:
router.post('/replies/save', reply.save);

// Edit reply:
router.get('/replies/edit/:id', reply.edit);

// Edit update:
router.post('/replies/update/:id', reply.update);

// Delete reply:
router.delete('/replies/delete/:id', reply.delete);

//export router as a module
module.exports = router;
