
/*import React from 'react';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <TaskManager />
    </div>
  );
};

export default App;*/


/*import React, { useState } from 'react';
import { Container, Typography, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  return (
    <Container className="app-container">
      <TaskManager />
    </Container>
  );
};

export default App;*/

/*import React, { useState } from 'react';
import { Container, Typography, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import TaskBlockView from './components/TaskBlockView';
import TaskListView from './components/TaskListView';
import './App.css';

const App = () => {
  const [view, setView] = useState('block');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', priority: 'High' },
    { id: 2, title: 'Task 2', description: 'Description 2', priority: 'Medium' },
    { id: 3, title: 'Task 3', description: 'Description 3', priority: 'Low' },
  ]);

  const handleViewChange = (event, newView) => {
    if (newView) setView(newView);
  };

  return (
    <Container className="app-container">
      <Typography variant="h4" align="center" gutterBottom>
        Task Manager
      </Typography>
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
      {view === 'block' ? (
        <TaskBlockView tasks={tasks} />
      ) : (
        <TaskListView tasks={tasks} />
      )}
    </Container>
  );
};

export default App;*/

/*import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? '#f4f4f9' : '#121212';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className="app-container">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;*/


/*import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? '#f4f4f9' : '#121212';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', padding: 0 }}>
        <TaskManager darkMode={darkMode} />
      </Container>
    </Box>
  );
};

export default App;*/

/*import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? '#f4f4f9' : '#121212';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', padding: 0 }}>
        <TaskManager darkMode={darkMode} />
      </Container>
    </Box>
  );
};

export default App;*/


/*import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? '#f4f4f9' : '#121212';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', padding: 0 }}>
        <TaskManager darkMode={darkMode} />
      </Container>
    </Box>
  );
};

export default App;*/

/*import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f4f4f9';
    document.body.style.color = darkMode ? '#fff' : '#000';
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', padding: 0 }}>
        <TaskManager darkMode={darkMode} />
      </Container>
    </Box>
  );
};

export default App;*/

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavbarRightSidebar from './components/NavbarRightSidebar';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? '#f4f4f9' : '#121212';
    document.body.style.color = darkMode ? '#000' : 'white';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="#330099" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="#330099" sx={{ flexGrow: 2 }}>
            DO IT
          </Typography>
          <IconButton color="#330099">
            <SearchIcon />
          </IconButton>
          <IconButton color="#330099" onClick={toggleSidebar}>
            <MoreVertIcon />
          </IconButton>
          <IconButton color="#330099" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', padding: 0 }}>
        <TaskManager darkMode={darkMode} />
      </Container>
      <NavbarRightSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </Box>
  );
};

export default App;

