import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {PixelateImage} from '../actions';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });
  
  function ActionButton(props) {
    const { classes } = props;

    const pixelateImage = () => {
        const { image64, pixelSize, imageSettings, setImage, setLoadingTrue, showSnackbar } = props;
        setLoadingTrue();
        PixelateImage(image64, pixelSize, imageSettings).then((pixelatedImage) => {
            setImage(pixelatedImage, imageSettings);
        }).catch(() => {
          	showSnackbar("There was an error with the request.");
        });
    }

    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={pixelateImage}>
            Pixelate!
        </Button>
    );
  }
  
  ActionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    image64: PropTypes.string.isRequired,
    pixelSize: PropTypes.number.isRequired,
    imageSettings: PropTypes.object.isRequired,
    setLoadingTrue: PropTypes.func.isRequired,
	setImage: PropTypes.func.isRequired,
	showSnackbar: PropTypes.func.isRequired
  };
  
  export default withStyles(styles)(ActionButton);