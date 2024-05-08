export interface Task {
  id: String
  title: String
  description: String
  priority: String
  createdAt: Date
  deadline: Date | null
  parentTask: String | null
  childTasks: Task[]
}
