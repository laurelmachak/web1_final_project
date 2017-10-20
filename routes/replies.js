var express = require('express');
var router = express.Router();
//to use req.body:
var bodyParser = require('body-parser');
// to use put rather then post:
var methodOverride = require('method-override');
// require that points to the Reply Controller
var reply = require("../controllers/ReplyController.js");

router.use(bodyParser.urlencoded({extended: true}));
router.use(methodOverride('_method'));
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
router.put('/replies/update/:id', reply.update);

// Delete reply:
router.delete('/replies/delete/:id', reply.delete);

//export router as a module
module.exports = router;
