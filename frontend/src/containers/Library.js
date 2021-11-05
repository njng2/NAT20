import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledEngineProvider,styled } from '@mui/material/styles';
import MediaCard from '../components/BuildLibPage';
import { Container, Grid,Paper } from '@mui/material';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Library = () => {

    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1,marginTop:10 }}>
                    <Grid container spacing={3} columns={18}>
                        <Grid item xs={6}>
                            <MediaCard></MediaCard>
                        </Grid>
                        <Grid item xs={6}>
                            <MediaCard></MediaCard>
                        </Grid>
                        <Grid item xs={6}>
                            <MediaCard></MediaCard>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Library;