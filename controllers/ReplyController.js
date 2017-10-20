var mongoose = require('mongoose');
//add model require:
var Reply = require('../models/Reply.js');

//create controller object for CRUD operations:
var replyController = {};

//show list of replies function:
replyController.list = function(req, res) {
  Reply.find({}).exec(function (err, replies) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/replies-index", {replies: replies});
      console.log(replies);
    }
  });
};

//show single reply function
replyController.show = function(req, res) {
  Reply.findOne({_id: req.params.id}).exec(function (err, reply) {
    if (err) {
      console.log("Error", err);
    }
    else {
      res.render("../views/replies-show", {reply: reply});
      console.log("reply:", reply)

    }
  });
};

//create reply function, it just redirects to the create page:
replyController.create = function(req, res) {
  res.render("../views/replies-create");
};

// save new reply function:
replyController.save = function(req, res) {
  var reply = new Reply(req.body);

  reply.save(function(err) {
    if (err){
      console.log(err);
      res.render("../views/replies-create");
    }
    else {
      console.log("Succesfully created a reply!");
      console.log("reply:", reply);
      console.log("req.body", req.body);
      res.redirect("/replies/show/"+reply._id);
    }
  });
};

// edit reply by id function, it just redirects to the edit page:
replyController.edit = function(req, res) {
  Reply.findOne({_id: req.params.id}).exec(function (err, reply) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/replies/edit", {reply: reply});
    }
  });
};

// update reply function for updating currently edited reply:
replyController.update = function(req, res) {
  Reply.findByIdAndUpdate(req.params.id, {$set: {response: req.body.response}},
  { new: true }, function (err, reply) {
    if (err) {
      console.log(err);
      res.render("../views/replies/edit", {reply: req.body});
    }
    res.redirect("/replies/show/"+reply._id);
  });
};

// delete reply by id function for remove single reply data

replyController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Reply deleted!");
      res.redirect("/replies");
    }
  });
};

// export reply controller as a module:
module.exports = replyController;
