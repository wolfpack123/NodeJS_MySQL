const express = require('express')
const controller = require('./controller')
const router = express.Router();

router.route("/").get(controller.getAllPosts).post(controller.createNewPost);
router.route("/:id").get(controller.getPostById).put(controller.updatePostById).delete(controller.deletePostById)
module.exports = router