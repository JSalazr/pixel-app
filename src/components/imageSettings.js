import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
    },
});

class ImageSettings extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            emptyText: "Field can't be empty.",
            pixelSizeError: false,
            xError: false,
            yError: false,
            widthError: false,
            heightError: false
        };
    }
    
    handlePixelSizeChange = (e) => {
        if(e.target.value.length === 0)
            this.setState({
                pixelSizeError: true
            });
        else{
            this.setState({
                pixelSizeError: false
            });
            this.props.setPixelSize(parseInt(e.target.value));
        }
    }

    handleImageSettingsChange = (e, field) => {
        this.props.setImageSettings({
            ...this.props.imageSettings,
            [field]: e.target.value.length === 0 ? '' : parseInt(e.target.value)
        });
    }

    render() {
      const { classes, imageSettings, pixelSize } = this.props;
      const { emptyText, pixelSizeError, xError, yError, widthError, heightError} = this.state;
  
      return (
        <form autoComplete="off">
            <Grid container className={classes.root} spacing={16} direction="row" justify="center">
                <Grid item xs={4}>
                    <TextField
                        id="pixel-size"
                        label="Pixel Size"
                        helperText = {pixelSizeError ? emptyText : ""}
                        error={pixelSizeError}
                        defaultValue={pixelSize}
                        onChange={(e) => this.handlePixelSizeChange(e)}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid container >
                        <Grid item>
                            <TextField
                                id="x"
                                label="Pixelation Area X Position"
                                value={imageSettings.x}
                                onChange={(e) => this.handleImageSettingsChange(e, 'x')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="xSize"
                                label="Pixelation Area Width"
                                value={imageSettings.xSize}
                                onChange={(e) => this.handleImageSettingsChange(e, 'xSize')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container >
                        <Grid item>
                            <TextField
                                id="y"
                                label="Pixelation Area Y Position"
                                value={imageSettings.y}
                                onChange={(e) => this.handleImageSettingsChange(e, 'y')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="ySize"
                                label="Pixelation Area Height"
                                value={imageSettings.ySize}
                                onChange={(e) => this.handleImageSettingsChange(e, 'ySize')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
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