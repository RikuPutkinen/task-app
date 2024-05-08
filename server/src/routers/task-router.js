const express = require('express')
const router = express.Router()

const Task = require('../db/models/task')

router.get('/', async (req, res) => {
  const tasks = await Task.find({ parentTask: null }).populate('childTasks')
  res.json(tasks)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const task = await Task.findOne({ _id: id }).populate('childTasks')

  if (!task) {
    res.status(404).end()
  } else {
    res.json(task)
  }
})

router.post('/', async (req, res) => {
  const { body } = req

  if (!body.title) {
    res.status(400).json({ error: 'Title missing' })
  }
  if (!body.priority) {
    res.status(400).json({ error: 'Priority missing' })
  }

  const newTask = {
    title: body.title,
    description: body.description || '',
    parentTask: body.parentId || null,
    priority: body.priority,
    deadline: body.deadline || null,
  }

  const task = new Task(newTask)
  const result = await task.save()
  res.status(201).json(result)
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
