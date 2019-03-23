import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });
  
  function ActionButton(props) {
    const { classes } = props;
    return (
        <Button variant="contained" color="primary" className={classes.button}>
            Pixelate!
        </Button>
    );
  }
  
  ActionButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ActionButton);