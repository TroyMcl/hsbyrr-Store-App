import React, { useEffect, useState } from 'react';
import reviewApi from '../../../apis/products';
import Pagination from 'react-pagination-js';
import "react-pagination-js/dist/styles.css";

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
  },
  recommendFriend: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  recommendFriendText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: '40px',
    fontWeight: 'bold'
  }
});

const Reviews = (props) => {
  const [reviewArr, setReviewArr] = useState([]);
  const [paginateList, setPaginateList] = useState([]);
  const [page, setPage] = useState(1);
  const { reviews } = props;
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      let data = await reviewApi.get(`reviews/${reviews}`)
      let curr = data.data.data.reviews;
      setReviewArr(curr)
      setPaginateList(curr.slice(0, 10))
    })()
  }, [])

  const changePage = (num) => {
    setPaginateList(reviewArr.slice((num - 1) * 10, num * 10))
    setPage(num);
  }

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
            color="secondary"
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
                color='secondary'
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
                color='secondary'
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
                color='secondary'
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
                color='secondary'
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
                color='secondary'
                value={30}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} className={classes.recommendFriend}>
          <Box position="relative" display="inline-flex">
            <CircularProgress
              style={{borderRadius: '5px'}}
              size={142}
              thickness={2}
              variant="static"
              color='secondary'
              value={81}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
            >
              <Typography
                className={classes.recommendFriendText}
                variant="caption"
                component="div"
              >
                81%
              </Typography>
              <Typography style={{textAlign: 'center'}}variant="caption" component="div">would recommend</Typography>
              <Typography style={{textAlign: 'center', lineHeight: '1em'}}variant="caption" component="div">to a friend</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div>
        {paginateList.map((review) => (
          <Review review={review} key={review.userName}/>
        ))}
      </div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="40px"
        paddingBottom="50px"
      >
        <Pagination
          totalSize={reviewArr.length}
          currentPage={page}
          changeCurrentPage={changePage}
          numberOfPagesNextToActivePage={2}
        />
      </Box>
    </div>
  )
}

export default Reviews;