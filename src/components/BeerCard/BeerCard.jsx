import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Buttons } from '../_shared/Buttons';
// import './BeerCard.scss';

import { makeStyles } from '@material-ui/core/styles';
//butons
// import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
//card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: '25px 25px',
    position: 'relative',
    paddingBottom: '50px',
  },
  media: {
    height: 200,
    marginTop: 10,
    backgroundSize: 'contain',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
  },
});

export const BeerCard = ({ beer, isFavorites, toggleFavorites, isLikes, toggleLike, isDisLikes, toggleDisLike }) => {
  const classes = useStyles();

  const history = useHistory();
  const { url } = useRouteMatch();

  const handleFavorites = () => {
    toggleFavorites(beer.name);
  };

  const handleLikes = () => {
    toggleLike(beer.name);
  };

  const handleDisLikes = () => {
    toggleDisLike(beer.name);
  };

  const handleLearnMore = () => {
    history.push(`${url}/${beer.id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea key={beer.id} onClick={handleLearnMore}>
        <CardMedia className={classes.media} image={beer.image_url} title={beer.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {beer.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {beer.brewers_tips}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Buttons size="small" color="primary" onClick={() => {}}>
          <ShareOutlinedIcon />
        </Buttons>
        <Buttons size="small" color="primary" onClick={() => {}}>
          <CommentOutlinedIcon />
        </Buttons>
        <Buttons size="small" color="primary" onClick={handleFavorites} isActive={isFavorites(beer.name)}>
          <FavoriteBorderIcon />
        </Buttons>
        <Buttons size="small" color="primary" onClick={handleLikes} isActive={isLikes(beer.name)}>
          <ThumbUpAltOutlinedIcon />
        </Buttons>
        <Buttons size="small" color="primary" onClick={handleDisLikes} isActive={isDisLikes(beer.name)}>
          <ThumbDownOutlinedIcon />
        </Buttons>
      </CardActions>
    </Card>
  );
};
