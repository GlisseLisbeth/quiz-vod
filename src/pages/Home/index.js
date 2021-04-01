import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress ,Typography } from '@material-ui/core';

import { selectQuiz } from '../../redux/actions/select';
import { videos, isLoading } from '../../redux/selectors';
import VideoCard from '../../components/VideoCard';

import styles from './style';

export default () => {
	const dispatch = useDispatch();
	console.log(dispatch);
	const videos = useSelector((state) => videos(state));
	console.log(videos);
	const isLoading = useSelector((state) => isLoading(state));
	
  
	const classes = styles();

	const renderVideoCard = () => {
		dispatch(selectQuiz());
		if (!videos) {
			return videos.map((value, index) => (<VideoCard key={index} {...value} />));
		} else if(isLoading){
			return <CircularProgress size={100}/>
		} else {
			return(<div></div>)
		}
	};

  return (
		<Container>
			<Typography variant="h2" align="center">Video Cuestionario</Typography>
			<Container className={classes.root}>
				{renderVideoCard()}
			</Container>
		</Container>	
	);
}