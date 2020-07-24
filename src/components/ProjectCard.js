import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-between"
  },
  caps: {
    fontVariant: "all-small-caps"
  }
});

const ProjectCard = props =>  {
  const classes = useStyles();
  const {imageURL, title, description, websiteURL, githubURL, technology, blogURL} = props.project
  const img = "images/" + imageURL

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={description}
          image={img}
          title={title}
          height="250px"
        />      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" className={classes.caps}>
            {technology}
          </Typography>
        </CardContent>
      <CardActions>
        {websiteURL ? <Button size="small" color="default" href={websiteURL} aria-label="visit-external-website">
          <Icon className="fas fa-external-link-alt"/>
        </Button> : null}
        
        <Button size="small" color="default" href={githubURL} aria-label="github">
          <Icon className="fa fa-github"/>
        </Button>

        {blogURL ? <Button size="small" color="default" href={blogURL} aria-label="blog-post">
        <Icon className="fab fa-dev"/>
        </Button> : null} 
        
      </CardActions>
    </Card>
  );
}

export default ProjectCard