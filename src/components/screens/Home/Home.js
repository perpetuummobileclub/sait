import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';
import { Button, TextField } from "@material-ui/core";
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
        <Container className={classes.paperContainer}>
            <Grid container>
                  <form className={classes.root} noValidate autoComplete="off">
                <Grid item xs={12}>
                    <TextField id="search-ideas" label="Search ideas" variant="outlined" />
                </Grid>
                <Grid>
                <Button variant="contained" className={classes.backgroundOrange}  color="secondary">
                      Search
                    </Button>
                </Grid>

                  </form>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography m={4} style={{ paddingTop: '60px', paddingBottom: '30px' }} component="h1" variant="h2" align="center" color="primary" gutterBottom>
                    Perpetuum mobile club
                  </Typography>
                  <Typography variant="h5" align="center" color="primary" paragraph>
                    Engineering activities, Software activities. Members should be only volunteers.
                  </Typography>
                </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>

              </Grid>
            </Grid>
        </Container>
      </MuiThemeProvider>
      <Container>
      </Container>
    </>
  );
};

export default Home;
