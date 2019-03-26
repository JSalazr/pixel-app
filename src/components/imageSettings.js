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

class TextFields extends React.Component {  
    
    handleSettingsChange = (field, setting, e) => {
        if(setting)
            this.props.handleChange('imageSettings')({...this.props.imageSettings, [field]: e.target.value});
        else
            this.props.handleChange('pixelSize')(e.target.value)
    }

    render() {
      const { classes, imageSetting, pixelSize, handleChange } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="pixel-size"
                label="Pixel Size"
                value={pixelSize}
                onChange={(e) => handleChange('pixelSize', false, e)}
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
  
  TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
    imageSettings: PropTypes.object.isRequired,
    pixelSize: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
  };
  
  export default withStyles(styles)(TextFields);