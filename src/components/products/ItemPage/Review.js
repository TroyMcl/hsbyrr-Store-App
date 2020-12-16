import React from 'react';

import { Grid, Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Check } from '@material-ui/icons';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const customRatingIcons = {
  1: {
    icon: < SentimentVeryDissatisfiedRoundedIcon />,
    label: 'Very Dissatisfied'
  },
  2: {
    icon: < SentimentVeryDissatisfiedIcon />,
    label: 'Dissatisfied'
  },
  3: {
    icon: < SentimentSatisfiedIcon />,
    label: 'Neutral'
  },
  4: {
    icon: < SentimentSatisfiedAltIcon />,
    label: 'Satisfied'
  },
  5: {
    icon: < SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied'
  }
}

function IconContainer(props) {
  const {value, ...other} = props;
  return <span {...other}>{customRatingIcons[value].icon}</span>
}

const Review = (props) => {
  const {userName, starRating, verifiedPurchaser, reviewDate, review, images, recommend, effictiveness, fastDelivery, quality } = props.review;
  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Typography>{userName}</Typography>
        <Box>
          <Typography component="legend">Effictiveness</Typography>
          <Rating
            name="effictivenessRating"
            defaultValue={effictiveness}
            getLabelText={(value) => customRatingIcons[value].label}
            IconContainerComponent={IconContainer}
          />
        </Box>
        <Box>
          <Typography component="legend">Fast Delivery</Typography>
          <Rating
            name="delivery"
            defaultValue={fastDelivery}
            getLabelText={(value) => customRatingIcons[value].label}
            IconContainerComponent={IconContainer}
          />
        </Box>
        <Box>
          <Typography component="legend">Quality</Typography>
          <Rating
            name="qualityRating"
            defaultValue={quality}
            getLabelText={(value) => customRatingIcons[value].label}
            IconContainerComponent={IconContainer}
          />
        </Box>
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