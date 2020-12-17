import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  section: {
    padding: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  pargraphStyles: {
    borderBottom: '1px solid #d3d3d3',
    fontWeight: 'lighter',
    paddingBottom: 15,
    fontSize: 14
  },
  headerStyles: {
    fontSize: 15,
    fontWeight: 'lighter'
  }
})


const Overview = (props) => {
  const { description, materials, recUsage } = props;
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3} md={3} lg={3} >
          <Typography
            className={classes.headerStyles}
            variant="h4"
          >
            Description
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} >
          <Typography
            className={classes.pargraphStyles}
            variant="body2"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3} md={3} lg={3} >
          <Typography
            className={classes.headerStyles}
            variant="h4"
          >
            Materials
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} >
          <Typography
            className={classes.pargraphStyles}
            variant="body2"
          >
            {materials}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid item xs={12} sm={3} md={3} lg={3} >
          <Typography
            className={classes.headerStyles}
            variant="h4"
          >
            Recommended Usage
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} >
          <Typography
            className={classes.pargraphStyles}
            variant="body2"
          >
            {recUsage}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Overview;