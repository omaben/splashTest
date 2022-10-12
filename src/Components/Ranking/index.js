import React from 'react';
import { List , Grid, ListItemButton , ListItemText, ListSubheader, Typography, secondaryAction, Collapse } from '@mui/material';
import Header from './Header'
import ItemList from './ItemList'
import './index.css';


function Ranking() {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: '100%', bgcolor: 'rgba(16, 12, 74, 0.2)', maxHeight: 290, overflow: 'auto' }}
      className='ranking-grid'
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className='head-ranking' component="div">
          <Header />
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-ranking'>
        <ItemList />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default Ranking;
