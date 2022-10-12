import React from 'react';
import { Grid,  Typography } from '@mui/material';

function Header() {
  return (
    <Grid container spacing={2} className='head-player-grid'>
            <Grid item xs={12} xs container className='item'>
                <Typography  component="div">
                    <Typography variant="h2" component="h2">
                        Players
                    </Typography>
                </Typography>
            </Grid>
            <Grid item className='item'>
                <Typography  component="div" >
                    <Typography variant="p" component="p">
                        8/12
                    </Typography>
                </Typography>
            </Grid>
          </Grid>
  );
}

export default Header;
