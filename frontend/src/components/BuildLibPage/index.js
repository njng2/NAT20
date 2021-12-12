import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgMap from '../../media/raceImages/index';
import { makeStyles } from '@mui/styles';
import { buttonBaseClasses } from '@mui/material';
import Axios from 'axios';

const useStyles = makeStyles({ //this dont work ?? idk
    media: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      padding: '0 30px',
      paddingTop: '56.25%', // 16:9,
      marginTop:'30',
      objectPosition: "left top"

    },
});



const onDelete = (id) =>{
    Axios.delete(`${process.env.REACT_APP_API_URL}/heroes/${id}/`)
    .then(res =>{
        console.log("Delete Response: ", res);
        window.location.reload();
    })
    // console.log(getData)
    // Axios.delete(getData[name])
};

const MediaCard = ({build}) => {
    // console.log("Here is build: ", build.id);
    const classes = useStyles;
    return (
        <Card sx={{ maxWidth: 345}} style={{backgroundColor: "black",color:"white"}}>
            <CardMedia
                // className={classes.media}
                component="img"
                marginTop='50%'
                height="400"
                image={imgMap[build.race_type]}
                alt="character image"
            />
         <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {build.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                Race: {build.race_type}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                Class: {build.class_type}
                </Typography>

                <Typography variant="body2" color="white">
                    <ul>
                        <li>STR: {build.STR}</li>
                        <li>DEX: {build.DEX}</li>
                        <li>CON: {build.CON}</li>
                        <li>INT: {build.INT}</li>
                        <li>WIS: {build.WIS}</li>
                        <li>CHA: {build.CHA}</li>
                    </ul>
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    // variant="contained" 
                     onClick={()=>onDelete(build.id)}
                                // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                    >
                    Delete
                    </Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;