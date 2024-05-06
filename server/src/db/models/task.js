const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  deadline: {
    type: Date,
    default: null,
  },
  parentTask: {
    type: mongoose.Types.ObjectId,
    default: null,
    ref: 'Task',
  },
  childTasks: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Task',
    },
  ],
})

taskSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v

    return ret
  },
})

module.exports = mongoose.model('Task', taskSchema)
