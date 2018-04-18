const express = require('express'),
    router    = express.Router(),
    db        = require('../models'),
    helpers   = require('../helpers/todos');

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route('/:id')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.delTodo);

module.exports = router;