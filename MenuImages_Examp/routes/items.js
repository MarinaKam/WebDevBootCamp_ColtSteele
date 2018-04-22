const express = require('express'),
    router    = express.Router(),
    db        = require('../models'),
    helpers   = require('../helpers/items');

router.route('/')
    .get(helpers.getItems)
    .post(helpers.creatItem);

router.route('/:id')
    .get(helpers.showItem)
    .put(helpers.updateItem)
    .delete(helpers.deletItem);

module.exports = router;