import { useQuery } from '@tanstack/react-query'
import { getAllTasks } from '../requests/task-requests'

export function useAllTasksQuery() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasks,
  })
}
