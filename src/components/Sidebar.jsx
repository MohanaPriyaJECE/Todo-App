/*import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, Typography, Button } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  const pieData = [
    { name: 'Completed', value: completedTasks, color: '#4caf50' },
    { name: 'Not Completed', value: notCompletedTasks, color: '#f44336' },
  ];

  return (
    <Box>
      <List>
        <ListItem button>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Assigned to Me" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Button variant="outlined" fullWidth>
        Add List
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" align="center">
        Task Stats
      </Typography>
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default Sidebar;*/

/*import React from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  const pieData = [
    { name: 'Completed', value: completedTasks, color: '#4caf50' },
    { name: 'Not Completed', value: notCompletedTasks, color: '#f44336' },
  ];

  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ padding: 2 }}>
        <Avatar
          alt="User Profile"
          src="https://via.placeholder.com/150"
          sx={{ width: 100, height: 100, marginBottom: 1, border: '3px solid white' }}
        />
        <Typography variant="h6">John Doe</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem button>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Assigned to Me" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Button variant="outlined" fullWidth>
        Add List
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" align="center">
        Task Stats
      </Typography>
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default Sidebar;*/


/*import React from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = ({ tasks, darkMode }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  const pieData = [
    { name: 'Completed', value: completedTasks, color: '#4caf50' },
    { name: 'Not Completed', value: notCompletedTasks, color: '#f44336' },
  ];

  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: darkMode ? '#424242' : '#f5f5f5',
        padding: 2,
        borderRadius: '0 12px 12px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Avatar
          alt="User Profile"
          src="https://via.placeholder.com/150"
          sx={{ width: 100, height: 100, border: '3px solid white' }}
        />
      </Box>
      <Box mt={6} textAlign="center">
        <Typography variant="h6">John Doe</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem button>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Assigned to Me" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Button variant="outlined" fullWidth>
        Add List
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" align="center">
        Task Stats
      </Typography>
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default Sidebar;*/


/*import React from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = ({ tasks, darkMode, onAddListClick }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  const pieData = [
    { name: 'Completed', value: completedTasks, color: '#4caf50' },
    { name: 'Not Completed', value: notCompletedTasks, color: '#f44336' },
  ];

  return (
    <Box
      sx={{
        height: '78%',
        marginY:'60px',
        backgroundColor: darkMode ? '#4727272' : '#E8E8E8',
        padding: 2,
        borderRadius: '0 12px 12px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Avatar
          alt="User Profile"
          src="https://via.placeholder.com/150"
          sx={{ width: 100, height: 100, border: '2px solid white' }}
        />
      </Box>
      <Box mt={6} textAlign="center">
        <Typography variant="h6">John Doe</Typography>
      </Box>
      <Divider sx={{ my: 0 }} />
      <List>
        <ListItem button>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Assigned to Me" />
        </ListItem>
      </List>
      <Divider sx={{ my: 1 }} />
      <Button variant="outlined" fullWidth onClick={onAddListClick}>
        Add List
      </Button>
      <Divider sx={{ my: 4}} />
      <Typography variant="h6" align="center">
        Today Tasks
      </Typography>
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="70%"
          cy="50%"
          outerRadius={60}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default Sidebar;*/


/*import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = ({ tasks, darkMode, onAddListClick }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  const pieData = [
    { name: 'Completed', value: completedTasks, color: '#4caf50' },
    { name: 'Not Completed', value: notCompletedTasks, color: '#f44336' },
  ];

  return (
    <Box
      sx={{
        height: '78%',
        marginY:'60px',
        backgroundColor: darkMode ? '#424242' : '#E8E8E8',
        padding: 2,
        borderRadius: '0 12px 12px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Avatar
          alt="User Profile"
          src="https://via.placeholder.com/150"
          sx={{ width: 100, height: 100, border: '3px solid white' }}
        />
      </Box>
      <Box mt={6} textAlign="center">
        <Typography variant="h6">John Doe</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Assigned to Me" />
        </ListItem>
        </List>
      <Divider sx={{ my: 2 }} />
      <Button
        variant="outlined"
        fullWidth
        startIcon={<AddIcon />}
        onClick={onAddListClick}
      >
        Add List
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" align="center">
        Task Stats
      </Typography>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          Total Tasks: {tasks.length}
        </Typography>
        <Typography variant="body2">
          Completed: {tasks.filter((task) => task.completed).length}
        </Typography>
      </Box>
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="65%"
          cy="35%"
          outerRadius={70}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default Sidebar;*/


import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = ({ tasks, darkMode, onAddListClick, setFilter }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  const pieData = [
    { name: 'Completed', value: completedTasks, color: 'darkgreen' },
    { name: 'Not Completed', value: notCompletedTasks, color: 'lightgreen' },
  ];

  return (
    <Box
      sx={{
        height: '78%',
        marginY:'60px',
        backgroundColor: darkMode ? '#424242' : '#E8E8E8',
        padding: 2,
        borderRadius: '0 12px 12px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Avatar
          alt="User Profile"
          src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg"
          sx={{ width: 100, height: 100, border: '3px solid white' }}
        />
      </Box>
      <Box mt={6} textAlign="center">
        <Typography variant="h6">Priya</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem button onClick={() => setFilter('all')}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button onClick={() => setFilter('today')}>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button onClick={() => setFilter('important')}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Assigned to Me" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Button
        variant="outlined"
        fullWidth
        startIcon={<AddIcon />}
        onClick={onAddListClick}
      >
        Add List
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" align="center">
        Task Stats
      </Typography>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          Total Tasks: {tasks.length}
        </Typography>
        <Typography variant="body2">
          Completed: {completedTasks}
        </Typography>
      </Box>
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="65%"
          cy="35%"
          outerRadius={70}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default Sidebar;

   