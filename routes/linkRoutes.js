const express = require('express');
const { getLinks, createLink, deleteLink, getLinksByUsername } = require('../controller/linkController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/api/link').get(protect, getLinks).post(protect, createLink);
router.route('api/link//delete/:id').delete(protect, deleteLink);
router.route('/:email').post(getLinksByUsername);
module.exports = router;
