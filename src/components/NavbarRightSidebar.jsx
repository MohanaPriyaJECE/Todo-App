import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LoopIcon from '@mui/icons-material/Loop';

const NavbarRightSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleSidebar}>
      <List sx={{ width: 250 }}>
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Step" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Set Reminder" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Add Due Date" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LoopIcon />
          </ListItemIcon>
          <ListItemText primary="Repeat" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavbarRightSidebar;
