import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Overview = (props) => {
  const { description, materials, recUsage } = props;

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={3} md={3} lg={3} >
          <Typography>Description</Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} >
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} sm={3} md={3} lg={3} >
          <Typography>Materials</Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} >
          <Typography>{materials}</Typography>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} sm={3} md={3} lg={3} >
          <Typography>Recommended Usage</Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} >
          <Typography>{recUsage}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Overview;