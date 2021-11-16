import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledEngineProvider,styled } from '@mui/material/styles';
import MediaCard from '../components/BuildLibPage';
import { Container, Grid,Paper } from '@mui/material';
import { Box } from '@mui/system';
import Axios from 'axios'; 
import { RaceImageBox } from '../components/BuildsPage/BuildsElements';
import { LibraryContainer } from '../components/BuildsPage/BuildsElements';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Library = () => {

    const [allBuilds, setAllBuilds] = useState([]);

    const getBuilds = async () => {
        await Axios.get(`${process.env.REACT_APP_API_URL}/heroes/`)
        .then((res) => {
            console.log("Here is the stuff", res.data);
            setAllBuilds(res.data);
        })
        .catch((err) => {
            console.error( err );
        });
    
    }
    
    useEffect(() => {
        getBuilds();
    }, [])

    console.log("Options after map: ", allBuilds);
    return (
        <>
        <LibraryContainer>
            <Container>
                <Box sx={{ flexGrow: 1,marginTop:10 }}>
                    <Grid container spacing={3} columns={18}>
                        {allBuilds.map((build) => (
                            <Grid item xs={6}>
                                <MediaCard build={build}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </LibraryContainer>
        </>
    )
}

export default Library;