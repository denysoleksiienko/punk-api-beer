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
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '25px 25px',
    position: 'relative',
    paddingBottom: '50px',
  },
  media: {
    height: 200,
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
            {beer.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
