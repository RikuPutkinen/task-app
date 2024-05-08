import axios from 'axios'
import { Task } from '../types'

const BASEURL = '/api/tasks'

export async function getAllTasks() {
  const res = await axios.get(BASEURL)
  const data: Task[] = res.data
  return data
}
