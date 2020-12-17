import React, { useEffect, useState } from 'react';
import reviewApi from '../../../apis/products';

import {
        Grid,
        Typography,
        Button,
        LinearProgress,
        CircularProgress,
        makeStyles,
        Box
      } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Review from './Review';

const useStyles = makeStyles({
  overviewContainer: {
    padding: 5,
    borderBottom: '1px solid #d3d3d3',
    margingBottom: 15,
  },
  reviewBtn: {
    marginTop: 12,
    marginBottom: 10
  },
  reviewText: {
    fontSize: 12,
  },
  reviewAverage: {
    marginBottom: 8,
  },
  linearRatingContainer: {
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  barText: {
    fontSize: 14
  },
  bar: {
    height: 7,
    borderRadius: 5,
  }
});

const Reviews = (props) => {
  const [reviewArr, setReviewArr] = useState([]);
  const { reviews } = props;
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      let data = await reviewApi.get(`reviews/${reviews}`)
      console.log(data.data.data.reviews)
      let curr = data.data.data.reviews;
      setReviewArr(curr.slice(0, 10))
    })()
  }, [])



  if (reviewArr.length === 0) return <p>Loading...</p>
  return (
    <div>
      <Grid container className={classes.overviewContainer} >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography variant="body2">Customer Rating</Typography>
          <Typography
            variant="h4"
            className={classes.reviewAverage}
          >
            3.7
          </Typography>
          <Rating
            name="totalRating"
            value={3.7}
            precision={0.1}
            readOnly
          />
          <Typography
            className={classes.reviewText}
          >
            ({reviews} Reviews)
          </Typography>
          <Button
            className={classes.reviewBtn}
            color="primary"
            variant="contained"
            size='small'
          >
            Write a Review
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box className={classes.linearRatingContainer}>
            <Typography className={classes.barText}>5 STAR</Typography>
            <Box style={{width: '60%'}}>
              <LinearProgress
                className={classes.bar}
                variant="determinate"
                color='primary'
                value={70}
              />
            </Box>
          </Box>
          <Box className={classes.linearRatingContainer}>
            <Typography className={classes.barText}>4 STAR</Typography>
            <Box style={{width: '60%'}}>
              <LinearProgress
                className={classes.bar}
                variant="determinate"
                color='primary'
                value={20}
              />
            </Box>
          </Box>
          <Box className={classes.linearRatingContainer}>
            <Typography className={classes.barText}>3 STAR</Typography>
            <Box style={{width: '60%'}}>
              <LinearProgress
                className={classes.bar}
                variant="determinate"
                color='primary'
                value={10}
              />
            </Box>
          </Box>
          <Box className={classes.linearRatingContainer}>
            <Typography className={classes.barText}>2 STAR</Typography>
            <Box style={{width: '60%'}}>
              <LinearProgress
                className={classes.bar}
                variant="determinate"
                color='primary'
                value={5}
              />
            </Box>
          </Box>
          <Box className={classes.linearRatingContainer}>
            <Typography className={classes.barText}>1 STAR</Typography>
            <Box style={{width: '60%'}}>
              <LinearProgress
                className={classes.bar}
                variant="determinate"
                color='primary'
                value={30}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div>
            <CircularProgress variant="determinate" color='secondary' value={80} />
            <Typography variant="caption" component="div">81%</Typography>
          </div>
            <Typography variant="body1"> would recommend to a friend</Typography>
        </Grid>
      </Grid>
      <div>
        {reviewArr.map((review) => (
          <Review review={review} key={review.userName}/>
        ))}
      </div>
    </div>
  )
}

export default Reviews;