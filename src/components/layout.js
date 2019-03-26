import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ActionButton from './actionButton';
import UploadButton from './uploadButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: '50%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Layout extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;

    return (
		<div>
            <Grid container className={classes.root} spacing={16}>
				<Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper className={classes.image}>
                            <Grid container>
                                <Grid item>
                                    Image will go here
                                </Grid>
                                <Grid item>
                                    <UploadButton />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
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
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <ActionButton />
                    </Grid>
				</Grid>
			</Grid>
		</div>
		
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
