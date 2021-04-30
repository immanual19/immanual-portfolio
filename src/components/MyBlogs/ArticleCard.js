import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const ArticleCard = ({post}) => {
    const classes = useStyles();
    return (
      <motion.div whileHover={{ scale: 1.09 }} style={{margin:'5%'}}>
        <a  style={{textDecoration: 'none', color:'white'}} href="https://immanuelsarker1.medium.com/what-is-javascri-534ebb8dd98" target="_blank"> <Card
        
        className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.headLine}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This article will be updated shortly.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      <Button variant="contained" size="small" color="primary">{post.type}</Button>
      <Button variant="contained" size="small" color="primary">1st May, 2020</Button>
  
      </CardActions>
    </Card></a>
    </motion.div>
    );
};

export default ArticleCard;