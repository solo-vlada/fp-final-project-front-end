import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AddNewItem from '../AddNewItem';

export default function BottomNav () {
    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,}} elevation={3}>
    <BottomNavigation
        sx={{backgroundColor: 'rgb(209, 216, 189)',   boxShadow: '0 0 5px 4px rgba(255, 255, 255, 0.3)'}}

      >
      <BottomNavigationAction sx={{color:'#354B46'}} label="Add Item" icon={ <AddNewItem  />} />
    </BottomNavigation>
  </Paper>
  )}

