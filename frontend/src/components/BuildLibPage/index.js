import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgMap from '../../media/raceImages/index'
import { makeStyles } from '@mui/styles';
import { buttonBaseClasses } from '@mui/material';

const useStyles = makeStyles({ //this dont work ?? idk
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      padding: '0 30px',
    },
  });

const MediaCard = ({build}) => {
    const classes = useStyles;
    console.log("Here is build bitches: ", build);
    return (
        <Card sx={{ maxWidth: 345}} style={{backgroundColor: "black",color:"white"}}>
            <CardMedia
                component="img"
                margin='auto'
                display='block'
                height="140"
                image={imgMap['dragonborn']}
                alt="character image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {build.name}
                </Typography>
                <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;