import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
  });


  
function UploadButton(props) {
    const { classes } = props;

    const printImage = (input) => {
        console.log(input.target.value);
    }

    return (
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={printImage}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload
                </Button>
            </label>
        </div>
    );
  }
  
  UploadButton.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(UploadButton);