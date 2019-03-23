import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;

    return (
		<Grid container className={classes.root} spacing={16}>
			<Grid item xs={12}>
				<Paper className={classes.control}>
					<Grid container>
						<Grid item>
							Image will go here
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper className={classes.control}>
					<Grid container>
						<Grid item>
							Pixelation options will go here
						</Grid>
					</Grid>
				</Paper>
			</Grid>
      	</Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
