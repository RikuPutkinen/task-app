import { Box } from '@mui/material'
import { useAllTasksQuery } from '../queries/task-queries'

import TaskGridView from './taskGridView'

export default function Home() {
  const res = useAllTasksQuery()

  if (res.isLoading) {
    return <div>Loadind data...</div>
  }

  if (res.isError) {
    return <div>Error accessing the server</div>
  }

  const tasks = res.data || []

  console.log(tasks)

  return (
    <Box p="1rem">
      <h1>Tasks</h1>
      <TaskGridView tasks={tasks} />
    </Box>
  )
}
