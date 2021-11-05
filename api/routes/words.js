const express = require("express")
const controller = require("../controllers/words")
const router  =  express.Router()
// localhost:4000/api/auth/login
router.get('/get_words', controller.get_words)
// localhost:4000/api/auth/register
router.post('/create_word', controller.create_word)


module.exports = router