import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AddNewItem from '../AddNewItem';

export default function BottomNav () {
    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,}} elevation={3}>
    <BottomNavigation
      >
      <BottomNavigationAction label="Add Item" icon={ <AddNewItem />} />
    </BottomNavigation>
  </Paper>
  )}

