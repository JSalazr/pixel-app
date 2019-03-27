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
    const { classes, setImage } = props;

    const onClickInput = (e) => {
        e.target.value = '';
    }

    const convertToBase64 = () => {
        setImage('', {
            x: 0,
            y: 0,
            xSize: 0,
            ySize: 0 
        });
        const selectedFile = document.getElementById('contained-button-file').files[0];
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
            let image = new Image();
            image.src = e.target.result;
            image.onload = function() {
                let settings = {
					x: 0,
					y: 0,
					xSize: this.width,
					ySize: this.height
				};
                setImage(reader.result, settings);
            }
        }
    }

    return (
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={convertToBase64}
                onClick={onClickInput}
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
    classes: PropTypes.object.isRequired,
    setImage: PropTypes.func.isRequired
  };
  
  export default withStyles(styles)(UploadButton);