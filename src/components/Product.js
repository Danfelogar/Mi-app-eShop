import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    fontWeight: "700",
    fontSize: "24px",
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
            className={classes.action}
            varinat='h5'
            color='textSecondary'
            >
                {accounting.formatMoney(50)}
            </Typography>
        }
        title="Mouse Logitech G203"
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://http2.mlstatic.com/D_NQ_NP_968506-MCO43754960908_102020-O.webp"
        title="Mouse Gamer"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Running Shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart" >
          <AddShoppingCart fontSize="large" />
        </IconButton>
        {Array(4)
        .fill()
        .map((_, i) =>(
            <p>&#11088;</p>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Logitech designs products and experiences that occupy an everyday place in people's lives, focusing on innovation and quality. Its aim is to create unique and meaningful moments for its users. Logitech mouses conform to the shape of your hand to provide hours of comfort. Without having to move your arm to slide the cursor, your hand will be less fatigued. They are ideal for any workspace and those who have a table full of various objects.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
