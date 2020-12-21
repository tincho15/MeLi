const express = require('express'),
    router = express.Router(),
    itemDetailController = require('../controllers/itemDetail'),
    itemListController = require('../controllers/itemList');

    

router.get('/items', itemListController)

router.get('/items/:id', itemDetailController)

module.exports = router;