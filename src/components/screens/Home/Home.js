import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';
import { Button } from "@material-ui/core";
import { Container } from '@material-ui/core';

const colortheme = createMuiTheme({
  // TODO Remove when you do not needed
  // palette: {
  //   primary: { main: "#fff", contrastText: "#fff" },
  //   secondary: { main: "#000", contrastText: "#fff" }
  // }
});

// TODO see if can optimize : 15-20 minutes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  paperContainer: {
    backgroundBlendMode: `color-burn`,
  },
  title: {
    flexGrow: 1
  },
  backgroundOrange: {
    backgroundColor: '#ff7a59'
  },
  backgroundBrown: {
    backgroundColor: 'brown'
  },
}));
const Home = () => {
  const classes = useStyles();
  useEffect(() => { }, []);
  return (
    <>
      <MuiThemeProvider theme={colortheme}>
        <div className={classes.paperContainer}>
          <Typography m={4} style={{ paddingTop: '60px', paddingBottom: '30px' }} component="h1" variant="h2" align="center" color="primary" gutterBottom>
            Perpetuum mobile club
          </Typography>
          <Container>
            <Typography variant="h5" align="center" color="primary" paragraph>
              Engineering activities, Software activities. Members should be only volunteers.
            </Typography>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ paddingTop: '30px', paddingBottom: '50px' }}
            >
              <Button variant="contained" className={classes.backgroundOrange}  color="secondary" style={{ padding: '14px' }}>
                Get Started
              </Button>
            </Grid>
          </Container>
        </div>
      </MuiThemeProvider>
      <Container>
      </Container>
    </>
  );
};

export default Home;
