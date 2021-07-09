import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Student from './components/showStudent/showStudent.js';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Create from './components/createStudent/createStudent.js';
import useStyles from './styles';
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center"> Students Create & Show</Typography>
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="strech">
                <Grid item xs={12} sm={7}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Student />

                  </AppBar>

                </Grid>
                <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create />

                </AppBar>


                </Grid>
              </Grid>
            </Container>
          </Grow>

      </Container>
    </div>
  );
}

export default App;
