const router = require('express').Router()

// home page
router.get('/', (req, res) => {
  res.sendFile('index.html')
})

module.exports = router
