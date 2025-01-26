


import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Checkbox, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TaskBlockView = ({ tasks, deleteTask, toggleTaskCompletion, toggleImportant }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card sx={{ opacity: task.completed ? 0.6 : 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {task.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {task.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: 1, fontWeight: 'bold', color: getPriorityColor(task.priority) }}
              >
                Priority: {task.priority}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Due: {task.date}
              </Typography>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
              <IconButton
                onClick={() => toggleImportant(task.id)}
                color={task.important ? "warning" : "default"}
              >
                {task.important ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteTask(task.id)}
                sx={{ marginTop: 1 }}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'red';
    case 'Medium':
      return 'orange';
    case 'Low':
      return 'green';
    default:
      return 'black';
  }
};

export default TaskBlockView;
