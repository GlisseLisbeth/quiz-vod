import React, { useEffect } from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { video as videoResultSelector } from '../../redux/selectors';
import { selectQuizById } from '../../redux/actions/select';

export default ({ match }) => {
  const dispatch = useDispatch();
  const videoResult = useSelector(state => videoResultSelector(state));
  console.log(videoResult);
  useEffect(() => {
    const videoId = match.params.id;
    if(!videoResult || videoResult && videoResult.id !== videoId ) {
      dispatch(selectQuizById({ videoId }))
    }
  });

  if(!videoResult) {
    return <CircularProgress  size={100}/>
  }
  return (
    <Container>
      <h1>{videoResult.Question}</h1>
    </Container>
  )
}