import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiLink from '@mui/material/Link';

interface AppHeaderProps {
  onClickMenu: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.onClickMenu}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" legacyBehavior passHref>
            <MuiLink variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
              サイト名
            </MuiLink>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
