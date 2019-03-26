import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
});

class ImageSettings extends React.Component {  
    
    handlePixelSizeChange = (e) => {
        this.props.setPixelSize(parseInt(e.target.value));
    }

    render() {
      const { classes, imageSetting, pixelSize } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="pixel-size"
                label="Pixel Size"
                value={pixelSize}
                onChange={(e) => this.handlePixelSizeChange(e)}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
            />
        </form>
      );
    }
  }
  
  ImageSettings.propTypes = {
    classes: PropTypes.object.isRequired,
    imageSettings: PropTypes.object.isRequired,
    pixelSize: PropTypes.number.isRequired,
    setPixelSize: PropTypes.func.isRequired,
    setImageSettings: PropTypes.func.isRequired
  };
  
  export default withStyles(styles)(ImageSettings);