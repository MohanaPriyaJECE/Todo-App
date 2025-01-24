
        


import React, { useState, useRef } from 'react';
import {  ToggleButton, ToggleButtonGroup, Box, TextField, Button, Grid } from '@mui/material';
import TaskBlockView from './TaskBlockView';
import TaskListView from './TaskListView';
import Sidebar from './Sidebar';


const TaskManager = ({ darkMode }) => {
  const [view, setView] = useState('block');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', priority: 'High', completed: false, date: '2025-01-24', important: false },
    { id: 2, title: 'Task 2', description: 'Description 2', priority: 'Medium', completed: false, date: '2025-01-24', important: true },
    { id: 3, title: 'Task 3', description: 'Description 3', priority: 'Low', completed: true, date: '2025-01-25', important: false },
  ]);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'Medium', date: '', important: false });
  const [filter, setFilter] = useState('all');

  const addTaskRef = useRef(null);

  const handleViewChange = (event, newView) => {
    if (newView) setView(newView);
  };

  const addTask = () => {
    if (newTask.title && newTask.description && newTask.date) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
      setNewTask({ title: '', description: '', priority: 'Medium', date: '', important: false });
    }
  };

  const handleAddListClick = () => {
    addTaskRef.current?.scrollIntoView({ behavior: 'smooth' });
    addTaskRef.current?.focus();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'today') {
      const today = new Date().toISOString().split('T')[0];
      return task.date === today;
    }
    if (filter === 'important') {
      return task.important;
    }
    return true;
  });

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={3}>
        <Sidebar
          tasks={tasks}
          darkMode={darkMode}
          onAddListClick={handleAddListClick}
          setFilter={setFilter}
        />
      </Grid>
      <Grid item xs={9} sx={{ padding: 2 }}>
        <Box ref={addTaskRef}>
          
          <Box display="flex" justifyContent="center" marginBottom={2}>
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              aria-label="View Toggle"
            >
              <ToggleButton value="block">Block View</ToggleButton>
              <ToggleButton value="list">List View</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box display="flex" gap={2} marginBottom={3}>
            <TextField
              label="Task Title"
              variant="outlined"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <TextField
              label="Task Description"
              variant="outlined"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <TextField
              label="Priority"
              variant="outlined"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            />
            <TextField
              label="Due Date"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            />
            <Button
              variant={newTask.important ? "contained" : "outlined"}
              color="warning"
              onClick={() => setNewTask({ ...newTask, important: !newTask.important })}
            >
              {newTask.important ? "Important" : "Mark Important"}
            </Button>
            <Button variant="contained" color="primary" onClick={addTask}>
              Add Task
            </Button>
          </Box>
          {view === 'block' ? (
            <TaskBlockView
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleTaskCompletion={toggleTaskCompletion}
              toggleImportant={toggleImportant}
            />
          ) : (
            <TaskListView
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleTaskCompletion={toggleTaskCompletion}
              toggleImportant={toggleImportant}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskManager;

