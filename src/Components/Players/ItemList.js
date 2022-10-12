import React from 'react';
import { Grid,  Typography } from '@mui/material';
function ItemList() {
  return (
    <Grid container spacing={0} className='list-item-player'>
            <Grid item xs={12} xs container className='item-name-player'>
                <Typography  component="div">
                    <Typography variant="p" component="p">
                        Miracle Levin
                    </Typography>
                </Typography>
            </Grid>
          </Grid>
  );
}

export default ItemList;
