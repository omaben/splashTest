import React from 'react';
import { Grid,  Typography } from '@mui/material';
function ItemList() {
  return (
    <Grid container spacing={0} className='list-item-ranking'>
            <Grid item xs={12} xs container className='item-name-ranking'>
                <Typography  component="div">
                    <Typography variant="p" component="p">
                        Miracle Levin
                    </Typography>
                </Typography>
            </Grid>
            <Grid item className='right-info-record'>
                <Typography  component="div">
                    <Typography variant="p" component="p" className='small'>
                        Record
                    </Typography>
                    <Typography variant="h3" component="h3">
                        1st
                    </Typography>
                </Typography>
            </Grid>
            <Grid item className='right-info-rank'>
                <Typography  component="div">
                    <Typography variant="p" component="p" className='small'>
                        Rank
                    </Typography>
                    <Typography variant="h3" component="h3" >
                        2:44
                    </Typography>
                </Typography>
            </Grid>
          </Grid>
  );
}

export default ItemList;
