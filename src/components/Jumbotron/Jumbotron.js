import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Jumbotron.css'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" className='div' >
            <h1>COVID-19</h1>
        </Typography>
      </Container>
    </React.Fragment>
  );
}