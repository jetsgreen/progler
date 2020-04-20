import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './Jumbotron.css'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" className='div' >
        <h1>CORONAVIRUS (COVID-19)</h1>
            <a href="https://covid-19-apis.postman.com/covid-19-testing-locations/" target="_blank" style={{textDecoration:'none'}}><Button className="btn" variant="contained" color="secondary">Testing Locations</Button></a>
        </Typography>
      </Container>
    </React.Fragment>
  );
}