const db = require('../models');

//INDEX ROUTE
exports.getTodos = (req, res) => {
    db.Todo.find()
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            res.send(err);
        })
};

//CREATE ROUTE
exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
        .then(newTodo => {
            res.status(201).json(newTodo);
        })
        .catch(err => {
            res.send(err);
        })
};

//SHOW ROUTE
exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.id)
        .then(foundTodo => {
            res.json(foundTodo);
        })
        .catch(err => {
            res.send(err);
        })
};

//UPDATE ROUTE
exports.updateTodo = (req, res) => {
    db.Todo.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(foundTodo => {
            res.json(foundTodo);
        })
        .catch(err => {
            res.send(err);
        })
};

//DELETE ROUTE
exports.delTodo =  (req, res) => {
    db.Todo.remove({ _id: req.params.id})
        .then(() => {
            res.json({message: 'We deleted it!'});
        })
        .catch(err => {
            res.send(err);
        })
};