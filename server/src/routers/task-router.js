const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('GET /api/tasks')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  console.log(`GET /api/tasks/${id}`)
})

router.post('/', (req, res) => {
  console.log('POST /api/tasks')
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  console.log(`PUT /api/tasks${id}`)
})

router.delete('/', (req, res) => {
  const { id } = req.params
  console.log(`DELETE /api/tasks/${id}`)
})

module.exports = router
