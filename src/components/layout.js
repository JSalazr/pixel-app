import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
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
    width: '98%',
    display: 'inline-block',
    padding: theme.spacing.unit * 2
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  dimensions: {
      fontSize: '11px',
      fontStyle: 'italic'
  }
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
            width: 0,
            height: 0,
            isLoading: false,
            showSnackbar: false,
            snackBarMessage: '',
            formValidation: true
        };
    }

    setImage = (image64, imageSettings, width, height) => {
        this.setState({
            image: image64,
            width: width,
            height: height,
            imageSettings: {...imageSettings},
            isLoading: false
        });
    }

    // setLoadingTrue = () => {
    //     this.setState({
    //         isLoading: true
    //     });
    // }

    // setPixelSize = (value) => {
    //     this.setState({
    //         pixelSize: value
    //     });
    // }

    // setImageSettings = (value) => {
    //     this.setState({
    //         imageSettings: value
    //     });
    // }

    // closeSnackbar = () => {
    //     this.setState({
    //         showSnackbar: false
    //     });
    // } 

    // setFormValidation = (value) => {
    //     this.setState({
    //         formValidation: value
    //     });
    // } 

    setValue = (field) => (value) => {
        this.setState({
            [field]: value
        });
    }

    showSnackbar = (message) => {
        this.setState({
            isLoading: false,
            snackBarMessage: message,
            showSnackbar: true
        });
    }

    render() {
        const { classes } = this.props;
        const { image, pixelSize, imageSettings, isLoading, showSnackbar, snackBarMessage, formValidation, width, height } = this.state;

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
                                        <p className={classes.dimensions}>Width: {width}, Height: {height} </p>
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
                                    <ImageSettings 
                                        setPixelSize={this.setValue('pixelSize')} 
                                        setImageSettings={this.setValue('imageSettings')} 
                                        pixelSize={pixelSize} 
                                        imageSettings={imageSettings}
                                        setFormValidation={this.setValue('formValidation')}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <ActionButton 
                                setImage={this.setImage} 
                                image64={image} 
                                pixelSize={pixelSize} 
                                imageSettings={imageSettings} 
                                setLoading={this.setValue('isLoading')} 
                                showSnackbar={this.showSnackbar}
                                formValidation={formValidation}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={showSnackbar}
                    autoHideDuration={6000}
                    onClose={this.setValue('showSnackbar')(false)}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{snackBarMessage}</span>}
                />
            </div>    
        );
    }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
