const express = require('express');
const { getLinks, createLink, deleteLink, getLinksByUsername } = require('../controllers/linkController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getLinks).post(protect, createLink);
router.route('/delete/:id').delete(protect, deleteLink);
router.route('/:email').post(getLinksByUsername);

module.exports = router;
