import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';

import './Cards.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading....'
    }
    return (
        <div className="container" >
            <Grid container spacing={3} justify="center">
                <Grid className="card" xs={12} md={3} item component={Card} >
                    <CardContent className="infected">
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of Covid-19</Typography>

                    </CardContent>

                </Grid>
                <Grid className="card" xs={12} md={3} item component={Card}>
                    <CardContent className="recovered" >
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoveries From Covid-19</Typography>

                    </CardContent>

                </Grid>
                <Grid className="card" xs={12} md={3} item component={Card}>
                    <CardContent className="deaths" >
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths Caused by Covid-19</Typography>

                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default Cards