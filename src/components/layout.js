import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import ActionButton from './actionButton';
import UploadButton from './uploadButton';
import ImageSettings from './imageSettings';
import Mayre from 'mayre';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    width: '80%',
  },
  image: {
    width: '100%',
    display: 'inline-block',
    padding: theme.spacing.unit * 2
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
            imageSettings: {
                x: 0,
                y: 0,
                xSize: 0,
                ySize: 0
            },
            isLoading: false
        };
    }

    setImage = (image64, imageSettings) => {
        this.setState({
            image: image64,
            imageSettings: {...imageSettings},
            isLoading: false
        });
    }

    setLoadingTrue = () => {
        this.setState({
            isLoading: true
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
        const { image, pixelSize, imageSettings, isLoading } = this.state;

        return (
            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12} lg={12}>
                        <Grid container justify="center">
                            <Paper className={classes.imageContainer}>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Mayre of={
                                            <CircularProgress />
                                        } or={
                                            <img src={image} alt="" className={classes.image}/>
                                        } when={isLoading} />
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
                            <Grid container justify="center">
                                <Grid item>
                                    <ImageSettings setPixelSize={this.setPixelSize} setImageSettings={this.setImageSettings} pixelSize={pixelSize} imageSettings={imageSettings} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <ActionButton setImage={this.setImage} image64={image} pixelSize={pixelSize} imageSettings={imageSettings} setLoadingTrue={this.setLoadingTrue}/>
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
