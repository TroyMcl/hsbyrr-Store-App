import React from 'react';

import {
      Grid,
      Typography,
      Box,
      makeStyles
    } from '@material-ui/core';
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

const useStyles = makeStyles({
  reviewContainer: {
    padding: '5px',
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 15,
    borderBottom: '1px solid #d3d3d3'
  },
  ratingSpecific: {
    paddingTop: '7px',
  },
  ratingSpecificText: {
    fontSize: 12,
    fontWeight: 'lighter'
  }
})


const Review = (props) => {
  const {userName, starRating, verifiedPurchaser, reviewDate, review, headline, recommend, effictiveness, fastDelivery, quality } = props.review;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const classes = useStyles();
  return (
    <Grid container className={classes.reviewContainer}>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Typography color="primary" > {userName}</Typography>
        <Box className={classes.ratingSpecific}>
          <Typography
            className={classes.ratingSpecificText}
            component="legend"
          >Effictiveness
        </Typography>
          <Rating
            name="effictivenessRating"
            defaultValue={effictiveness}
            getLabelText={(value) => customRatingIcons[value].label}
            IconContainerComponent={IconContainer}
            readOnly
            fontSize='small'
          />
        </Box>
        <Box>
          <Typography
            className={classes.ratingSpecificText}
            component="legend"
          >
            Fast Delivery
          </Typography>
          <Rating
            name="delivery"
            defaultValue={fastDelivery}
            getLabelText={(value) => customRatingIcons[value].label}
            IconContainerComponent={IconContainer}
            readOnly
            fontSize='small'
          />
        </Box>
        <Box>
          <Typography
            className={classes.ratingSpecificText}
            component="legend"
          >
            Quality
          </Typography>
          <Rating
            name="qualityRating"
            defaultValue={quality}
            getLabelText={(value) => customRatingIcons[value].label}
            IconContainerComponent={IconContainer}
            readOnly
            fontSize='small'
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          style={{marginBottom: '7px'}}
        >
          <Rating name="totalRating" value={starRating} readOnly />
          <Typography style={{paddingLeft: '10px', fontSize: '14'}}>{headline}</Typography>
        </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        style={{marginBottom: '7px'}}
      >
        {verifiedPurchaser ?
          <Box
          display="flex"
          alignItems="center"
          >
            <Check
              color="secondary"
              style={{paddingRight: '5px'}}

            />
            <Typography variant="body2">
              Verified Purchaser |
            </Typography>
          </Box>:
          ''
        }
        <Typography style={{fontSize: '10px', fontWeight: 'lighter', paddingLeft: '5px'}} >
          Posted on {formatDate(reviewDate)}
        </Typography>
      </Box>
      <Typography>{review}</Typography>
      {recommend ?
        <Box
        display="flex"
        alignItems="center"
        marginTop='10px'
        >
          <CheckCircleIcon color='secondary' />
          <Typography style={{fontWeight: 'lighter', paddingLeft: '8px'}}>I would recommend this to a Friend</Typography>
        </Box>:
        ''
      }
      </Grid>
    </Grid>
  )
}

export default Review;