import React, { useEffect, useState } from 'react';
import reviewApi from '../../../apis/products';

import { Grid, Typography, Button, LinearProgress, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const Reviews = (props) => {
  const [reviewArr, setReviewArr] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await reviewApi.get(`reviews/${reviews}`)
      console.log(data.data.data.reviews)
      let curr = data.data.data.reviews;
      setReviewArr(curr.slice(0, 10))
    })()
  }, [])
  const { reviews } = props;
  if (reviewArr.length === 0) return <p>Loading...</p>
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography variant="body2">Customer Rating</Typography>
          <Typography variant="h4">3.7</Typography>
          <Rating name="totalRating" value={3.7} precision={0.1} readOnly />
          <Typography>({reviews} Reviews)</Typography>
          <Button>Write a Review</Button>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography>5 STAR {<LinearProgress variant="determinate" color='primary' value={70} />}</Typography>
          <Typography>4 STAR {<LinearProgress variant="determinate" color='primary' value={20} />} </Typography>
          <Typography>3 STAR {<LinearProgress variant="determinate" color='primary' value={10} />} </Typography>
          <Typography>2 STAR {<LinearProgress variant="determinate" color='primary' value={5} />} </Typography>
          <Typography>1 STAR {<LinearProgress variant="determinate" color='primary' value={30} />} </Typography>
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
          <p>{review.userName}</p>
        ))}
      </div>
    </div>
  )
}

export default Reviews;