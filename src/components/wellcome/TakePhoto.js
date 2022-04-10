import React, { useState } from "react";
import VideoSnapshot from 'video-snapshot';
import { 
  Card,
  CardContent,
  makeStyles,
  Button,
  TextField,
  Grid,
  Typography,
  Fade,
  Slide,
  Box,
  Container
} from '@material-ui/core';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';


import CameraAltTwoToneIcon from '@material-ui/icons/CameraAltTwoTone';
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: 'transparent',
      backgroundSize: 'cover',
  },
  forgot: {
      textDecoration: 'none',
      display: 'block',
      marginTop: '0em',
      marginBottom: '1em',
      cursor: 'pointer',
  },
  card: {
      overflow: 'visible',
      display: 'flex',
      position: 'relative',
      '& > *': {
          flexGrow: 1,
          flexBasis: '50%',
          width: '50%',
      },
      maxWidth: '475px',
      margin: '24px auto',
      transition: 'all .3s .4s ease-in',
      opacity: .92,
  },
  socialButton: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      justifyContent: 'center',
      width: '-webkit-fill-available',
      '& span': {
          minWidth: '270px',
          maxWidth: '270px',
          justifyContent: 'flex-start',
          '& svg': {
              marginRight: theme.spacing(1),
              marginLeft: theme.spacing(1),
          },
      }
  },
  google: {
      backgroundColor: red[700],
      '&:hover': {
          backgroundColor: red[400]
      }
  },
  microsoft: {
      backgroundColor: grey[900],
      '&:hover': {
          backgroundColor: grey[800]
      }
  },
  facebook: {
      backgroundColor: blue[700],
      '&:hover': {
          backgroundColor: blue[400]
      }
  },
  apple: {
      backgroundColor: grey[400],
      color: grey[800],
      '&:hover': {
          backgroundColor: grey[200]
      },
  },
  overlay: {
      background: 'hsla(0, 0%, 100%, .8)',
      background: 'radial-gradient(circle, transparent 0%, hsla(0, 0%, 0%, 1) 100%)',
      background: '-moz-radial-gradient(circle, transparent 0%, hsla(0, 0%, 0%, 1) 100%)',
      background: '-webkit-radial-gradient(circle, transparent 0%, hsla(0, 0%, 0%, 1) 100%)',
      opacity: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      zIndex: 999999,
  },
  backgroundImg: {
      position: 'fixed',
      top: 0,
      left: 0,
      objectFit: 'cover',
      objectPosition: 'center',
      height: '100vh',
      width: '100vw',
      transition: 'all .3s ease-in',
      zIndex: -1,
      },
  user: {
      display: 'flex',
      margin: 'auto',
      backgroundColor: 'transparent',
      maxWidth: '250px',
      height: '170px',
      objectFit:'contain',
      justifyContent: 'center',
      //'o-webkit-filter': 'drop-shadow(2px 2px 5px #c4c9e5 )',
      //filter: 'drop-shadow(2px 2px 5px #c4c9e5)',
  },
  userTitle: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      marginTop: '.1em',
      fontSize: '2em',
      whiteSpace: 'noWrap',
      // backgroundColor: '#c4c9e5b5',
      padding: '0 2em',
      fontWeight: 600,
  },
  accentColor: {
      color: '#ef5350'
  }
  
}));

export const FileInupt = () => {
  const classes = useStyles();

  const [images, setImages] = useState([]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function doSomethingWithFiles(fileList) {
    let files = [];

    for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type.match(/image\//))  {
            const img = URL.createObjectURL(fileList[i])
            files.push({data: img, snapshot: img});

        }
      if ( fileList[i].type.match(/video\//)) {
        
          const snapshoter = new VideoSnapshot(fileList[i]);
          const previewSrc = await snapshoter.takeSnapshot(1);
        files.push({data: URL.createObjectURL(fileList[i]), snapshot: previewSrc});
      }
    }

    if (files.length) {
      const allFiles = [...images, ...files]
      setImages(allFiles);
    }
  }

  async function test(image) {
    const files = image.target.files;
    await doSomethingWithFiles(files);
  }

  return (
    <>

      <Card className={classes.card} elevation={15} >
        <CardContent className={classes.content} >
          <Grid container justify="center" alignItems="center" className={classes.root} margin='auto' direction='row'>
              <Grid item xs={4} justifyContent="center">
                <label for="capturePhoto">
                  <input type="file" accept="image/*" capture="camera" onChange={test} id="capturePhoto" style={{display: "none"}}/>
                  <CameraAltTwoToneIcon fontSize="large" style={{width: '100%'}}/>
                </label>
              </Grid>
              <Grid item xs={4} justifyContent="center">
                <form action="POST">
                  <label for="addFromGallery">
                      <input
                        type="file"
                        accept="image/*, video/*"
                        name="pic"
                        onChange={test}
                        multiple
                        id="addFromGallery"
                        style={{display: "none"}}
                      />
                    <AddToPhotosTwoToneIcon fontSize="large" style={{width: '100%'}}/>
                  </label>
                </form>
              </Grid>
              <Grid item xs={4} justifyContent="center">
                <CloudUploadTwoToneIcon fontSize="large" style={{width: '100%'}}/>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
      <br />

      <Grid container spacing={2} columns={2} >
        {images.map((image, index) => (
          <Grid item xs={4} key={index}>
            <img alt="cam" src={image.snapshot} style={{ width: '100%', height: '150px',  objectFit: 'cover', boxShadow: '0 6px 10px rgba(0,0,0,.2)', border: '1px solid #dadada'}}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
