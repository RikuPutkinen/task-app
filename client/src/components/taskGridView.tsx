import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import { Task } from '../types'

export default function taskGridView({ tasks }: { tasks: Task[] }) {
  return (
    <Grid container spacing="1rem">
      {tasks.map(task => {
        console.log(task)
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card key={task.id}>
              <CardHeader title={task.title}></CardHeader>
              <CardContent>
                <Typography variant="body2" component="p">
                  Priority: {task.priority}
                </Typography>
                <Typography variant="body2" component="p">
                  Deadline:{' '}
                  {task.deadline ? task.deadline.toDateString() : 'Not set'}
                </Typography>
                <Typography variant="body1" component="p">
                  {task.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
