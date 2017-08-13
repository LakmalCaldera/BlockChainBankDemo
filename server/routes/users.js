const express = require('express');
const router = express.Router();

const UsersController = require('./../controllers/users');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
.get(UsersController.index)
.post(validateBody(schemas.userBody), UsersController.newUser);

router.route('/:id')
.get(validateParam(schemas.id, 'id'), UsersController.getUser)
.put([validateParam(schemas.id, 'id'), validateBody(schemas.userBody)], UsersController.replaceUser)
.patch([validateParam(schemas.id, 'id'), validateBody(schemas.userBody)], UsersController.updateUser)
.delete(validateParam(schemas.id, 'id'), UsersController.deleteUser);

router.route('/:id/messages')
.get(UsersController.getUserMessages)
.post(UsersController.newUserMessage)

module.exports = router;