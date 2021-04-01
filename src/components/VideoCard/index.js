import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import  { withRouter } from 'react-router-dom';

import styles from './style';

const VideoCard = ({ Id, Url, Question, history }) => {
	const classes = styles();
  

	const handleVideoItemClick = event  => {
    history.push(`video/${id}`);
	}

  return (
		<Card className={classes.content}>
      {Url ? 
      <CardMedia
        className={classes.cover}
        src={Url}	
      >
        <div className={classes.controls}>
          <IconButton aria-label="startVideo">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </CardMedia>
      :
      <Container className={classes.containerBlack}>
        <div className={classes.controls}>
          <IconButton aria-label="startVideo" onClick={handleVideoItemClick}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </Container>}
      <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            {Question}
          </Typography>
        </CardContent>
    </Card>
	);
}

export default withRouter(VideoCard); 