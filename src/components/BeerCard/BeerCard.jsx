import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

// import './BeerCard.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
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

export const BeerCard = ({ beer }) => {
  const classes = useStyles();

  const history = useHistory();
  const { url } = useRouteMatch();

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
        <Button size="small" color="primary">
          <ShareOutlinedIcon />
        </Button>
        <Button size="small" color="primary">
          <CommentOutlinedIcon />
        </Button>
        <Button size="small" color="primary">
          <FavoriteBorderIcon />
        </Button>
        <Button size="small" color="primary">
          <ThumbUpAltOutlinedIcon />
        </Button>
        <Button size="small" color="primary">
          <ThumbDownOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
