import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Check } from '@material-ui/icons';

const Review = (props) => {
  const {userName, starRating, verifiedPurchaser, reviewDate, review, images, recommend, effictiveness, fastDelivery, quality } = props.review;
  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Typography>{userName}</Typography>

      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9}>
      <Rating name="totalRating" value={starRating} readOnly />
      <Typography>Generic HeadLine: Fix data Troy</Typography>
      {verifiedPurchaser?  <Typography variant="body2"> <Check /> Verified Purchaser</Typography> : ''}
      <Typography>
        | Review added on {reviewDate}
      </Typography>
      <Typography>{review}</Typography>
      {recommend ? <Typography>{<CheckCircleIcon color='primary' />} I would recommend this to a Friend</Typography> : ''}
      </Grid>
    </Grid>
  )
}

export default Review;