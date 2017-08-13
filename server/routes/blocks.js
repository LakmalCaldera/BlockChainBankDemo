const express = require('express');
const router = express.Router();

const BlocksController = require('./../controllers/blocks');

router.route('/')
.get(BlocksController.getBlocks)
.post(BlocksController.newBlock)


router.route('/:id')
.get(BlocksController.getBlock)

module.exports = router;