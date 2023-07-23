import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiLink from '@mui/material/Link';
import { SxProps, Theme } from '@mui/material';

interface AppHeaderProps {
  sx?: SxProps<Theme>;
  position: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  onClickMenu: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  return (
    <AppBar
      position={props.position}
      sx={{ zIndex: 1000, ...props.sx }}
      color="inherit"
    >
      <Toolbar sx={{ backgroundColor: 'background.paper' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={props.onClickMenu}
        >
          <MenuIcon />
        </IconButton>
        <MuiLink
          variant="h6"
          component={Link}
          href="/"
          color="inherit"
          sx={{ flexGrow: 1, textDecoration: 'none' }}
        >
          サイト名
        </MuiLink>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
