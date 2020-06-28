// import React from 'react'
// import Typography from '@material-ui/core/Typography';

// const ProjectCard = props =>  {
//   const {imageURL, title, description} = props.project
//   const src = "images/" + imageURL
// 	return(
//     <div className="project-card">
//       <Typography variant="h3" gutterBottom>
//         {title}
//       </Typography>
//       <img className="project-pic" src={src} alt="project picture"/>
//       <Typography variant="subtitle1" gutterBottom>
//         {description}
//       </Typography>
//     </div>
//   )
// }

// export default ProjectCard

import React from 'react';
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
    width: "100%",
    margin: "5%"
  },
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
          width="100%"
          image={img}
          title={title}
        />      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {technology}
          </Typography>
        </CardContent>
      <CardActions>
        {websiteURL ? <Button size="small" color="primary" href={websiteURL}>
          Visit Site
        </Button> : null}
        
        <Button size="small" color="primary" href={githubURL}>
          GitHub
        </Button>

        {blogURL ? <Button size="small" color="primary" href={blogURL}>
          Blog Post
        </Button> : null} 
        
      </CardActions>
    </Card>
  );
}

export default ProjectCard