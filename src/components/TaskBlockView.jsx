/*import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const TaskBlockView = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {task.description}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                Priority: {task.priority}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default TaskBlockView;*/
/*import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const TaskBlockView = ({ tasks }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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

export default TaskBlockView;*/


/*import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const TaskBlockView = ({ tasks }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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

export default TaskBlockView;*/



/*import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const TaskBlockView = ({ tasks, deleteTask }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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
  
  export default TaskBlockView;*/

  /*import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Checkbox } from '@mui/material';

const TaskBlockView = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
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

export default TaskBlockView;*/


/*import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Checkbox } from '@mui/material';

const TaskBlockView = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
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

export default TaskBlockView;*/


/*import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Checkbox } from '@mui/material';

const TaskBlockView = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
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

export default TaskBlockView;*/


/*import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Checkbox } from '@mui/material';

const TaskBlockView = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
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

export default TaskBlockView;*/


/*import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Checkbox, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TaskBlockView = ({ tasks, deleteTask, toggleTaskCompletion, toggleImportant }) => {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
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

export default TaskBlockView;*/


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