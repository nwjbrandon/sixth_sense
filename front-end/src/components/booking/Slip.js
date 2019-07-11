import React from 'react';
import MasterTable from './Tabular';
import MasterTableMobile from './TabularMobile';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(() => {
});

const App = (props) => {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    setWindowWidth(window.innerWidth);
  }, []);

  const classes = useStyles();

  return (
    <div className='flex-center container medium-border-surround'>
      <Typography className={classes.label} variant="h4">
        Here's your Order
        </Typography>
      <div>
        <Paper>
          <Typography className={classes.label} variant="h6">
            {props.personalDetails.firstName} {props.personalDetails.lastName} from {props.personalDetails.country}
          </Typography>
          <Typography className={classes.label} variant="h6">
            {props.personalDetails.email}
          </Typography>
        </Paper>
        <div>
          <Typography className={classes.label} variant="h5">
            Price Breakdown
            </Typography>
          {windowWidth > 600
            ?  <MasterTable tripDetails={props.tripDetails} cost={props.cost} calcData = {props.calcData} />
            :  <MasterTableMobile tripDetails={props.tripDetails} cost={props.cost} calcData={props.calcData} />
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    personalDetails: state.booking.personalDetails,
    tripDetails: state.booking.tripDetails,
    cost: state.booking.cost,
  };
};


export default connect(mapStateToProps)(App)
