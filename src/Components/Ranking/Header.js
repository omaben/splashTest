import React from 'react';
import { Grid,  Typography } from '@mui/material';

function Header() {
  return (
    <Grid container spacing={2} className='head-ranking-grid'>
            <Grid item xs={12} xs container>
                <Typography  component="div">
                    <Typography variant="h2" component="h2">
                        3:44
                    </Typography>
                    <Typography variant="p" component="p">
                        Your Last record
                    </Typography>
                </Typography>
            </Grid>
            <Grid item className='right-info-head'>
                <Typography  component="div">
                    <Typography variant="h2" component="h2">
                        # 144th
                    </Typography>
                    <Typography variant="p" component="p">
                        from 15k
                    </Typography>
                </Typography>
            </Grid>
          </Grid>
  );
}

export default Header;
