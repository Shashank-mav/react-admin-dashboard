// src/MyAppBar.js
import React from 'react';
import { AppBar, TitlePortal, UserMenu, useUserMenu } from 'react-admin';
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { UserButton } from '@clerk/clerk-react';

const SettingsMenuItem = React.forwardRef((props, ref) => {
  const { onClose } = useUserMenu();
  return (
    <MenuItem
      onClick={onClose}
      ref={ref}
      {...props}
    >
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Customize</ListItemText>
    </MenuItem>
  );
});

export const MyAppBar = () => (
  <AppBar>
    <TitlePortal />
    <Box flex="1" />

      <UserButton />

    
  </AppBar>
);
