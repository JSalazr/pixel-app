import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ActionButton from './actionButton';
import UploadButton from './uploadButton';
import ImageSettings from './imageSettings';

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
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            pixelSize: 5,
            imageSettings: {}
        };
    }

    setImage = (image64, imageSettings) => {
        this.setState({
            image: image64,
            imageSettings: {...imageSettings}
        });
    }

    setPixelSize = (value) => {
        this.setState({
            pixelSize: value
        });
    }

    setImageSettings = (value) => {
        this.setState({
            imageSettings: value
        });
    }

    render() {
        const { classes } = this.props;
        const { image, pixelSize, imageSettings } = this.state;

        return (
            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Paper className={classes.image}>
                                <Grid container justify="center">
                                    <Grid item>
                                        <img src={image} />
                                    </Grid>
                                </Grid>
                                <Grid container justify="center">
                                    <Grid item>
                                        <UploadButton setImage={this.setImage}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.control}>
                            <Grid container>
                                <Grid item>
                                    <ImageSettings setPixelSize={this.setPixelSize} setImageSettings={this.setImageSettings} pixelSize={pixelSize} imageSettings={imageSettings} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <ActionButton setImage={this.setImage} image64={image} pixelSize={pixelSize}/>
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
