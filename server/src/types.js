const mongoose = require('mongoose')

/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} priority
 * @property {Date} createdAt
 * @property {Date | null} deadline
 * @property {mongoose.Types.ObjectId | null} parentTask
 * @property {mongoose.Types.ObjectId[]} childTasks
 */
