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
          <Link href="/announcement" legacyBehavior passHref>
            <ListItemButton component="a">
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="お知らせ" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/push" legacyBehavior passHref>
            <ListItemButton component="a">
              <ListItemIcon>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary="プッシュ通知" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default AppSideMenu;
