import React from 'react';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import Toolbar from '@mui/material/Toolbar';

const AppSideMenu: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/announcement">
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="お知らせ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/push">
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="プッシュ通知" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default AppSideMenu;
