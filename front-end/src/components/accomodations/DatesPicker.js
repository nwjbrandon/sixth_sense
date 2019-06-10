import React from 'react'
import Datepicker from './Datepicker'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MealCheckbox from './MealCheckbox'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  label:{
    marginBottom: "10px"
  }
}));

const Datespicker = () =>{
  const classes  = useStyles();
  return(
    <React.Fragment>

      <Grid item xs={12}>
      <Paper className={classes.root}>
        <Typography className={classes.label}>
          Choose Your Dates
        </Typography>
        <Grid container spacing={3}>

          <Datepicker datelabel = "Check-In Date" />
          <Datepicker datelabel = "Check-Out Date" />
        </Grid>
      </Paper>
      </Grid>

    </React.Fragment>

  );
}

export default Datespicker;