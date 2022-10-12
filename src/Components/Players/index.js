import React from 'react';
import { List ,ListItemAvatar ,Avatar,  Button, ListItemButton , ListItemText, ListSubheader, Collapse } from '@mui/material';
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
      className='player-grid'
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className='head-player' component="div">
          <Header />
          <Button variant="contained" startIcon={<img src={require('../../Assets/img/Vector.png')}/>}>Setting</Button>
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} className='head-player-item' >
        <ListItemAvatar className='avatar'>
          <Avatar>
            <img
              src={require('../../Assets/img/avatar.png')}
            />
          </Avatar>
        </ListItemAvatar>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-player-item' >
        <ListItemAvatar className='avatar'>
          <Avatar>
            <img
              src={require('../../Assets/img/avatar.png')}
            />
          </Avatar>
        </ListItemAvatar>
        <ItemList />
      </ListItemButton>
      <ListItemButton onClick={handleClick} className='head-player-item' >
        <ListItemAvatar className='avatar'>
          <Avatar>
            <img
              src={require('../../Assets/img/avatar.png')}
            />
          </Avatar>
        </ListItemAvatar>
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
