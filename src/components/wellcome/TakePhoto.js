import React, { useState } from "react";
import VideoSnapshot from 'video-snapshot';
import { useDispatch } from 'react-redux';

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
  Container,
  Backdrop,
  CircularProgress,
  Fab,
  Avatar,
  Badge,
  SmallAvatar
} from '@material-ui/core';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';


import CameraAltTwoToneIcon from '@material-ui/icons/CameraAltTwoTone';
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';

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

export const FileInupt = ({next}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [zoom, setZoom] = useState(false);


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
            files.push({data: fileList[i], snapshot: img});

        }
      if ( fileList[i].type.match(/video\//)) {
          const snapshoter = new VideoSnapshot(fileList[i]);
          const previewSrc = await snapshoter.takeSnapshot(1);
        files.push({data: fileList[i], snapshot: previewSrc});
      }
    }

    if (files.length) {
      const allFiles = [...images, ...files]
      setImages(allFiles);
    }
    setIsLoading(false);
  }

  async function test(image) {
    setIsLoading(true);
    const files = image.target.files;
    await doSomethingWithFiles(files);
  }

  async function handleUpload(images) {
    if (!images.length) return;
    setIsLoading(true)
    const res = await dispatch.data.uploadToGDrive({files: images})
    if (res) {
      setIsLoading(false);
      setImages([])
      next()
    }

  }
  const handleZoom = (image) => setZoom(image)
const removeZoom = () => setZoom(false)
const handleRemove = (index) => {
  console.log('entramos al handle remove', index)
  const newImages = [...images];
  newImages.splice(index,1);
  console.log('newImages', newImages.length)
  console.log('images', images.length)

  setImages(newImages)
}

const Overlay = (props) => {
  const classes = useStyles();
  return  (
      <div className={classes.overlay}>
          {props.children}
      </div>
  );
};
  return (
    <>

      <Card className={classes.card} elevation={15} style={{position: 'fixed', right: '2em', top: 'calc(100vh - 11em)', left: '2em', zIndex: '10'}}>
        <CardContent className={classes.content} >
          <Grid container justify="center" alignItems="center" className={classes.root} margin='auto' direction='row'>
              <Grid item xs={4} justifyContent="center">
                <label for="capturePhoto">
                  <input type="file" accept="*" capture="camera" onChange={test} id="capturePhoto" style={{display: "none"}} multiple/>
                  <CameraAltTwoToneIcon fontSize="large" style={{width: '100%'}}/>
                  <Typography
                    mb={0}
                    variant="subtitle2"
                    color="seccondary"
                    align="center"
                  >
                      Cámara
                  </Typography>
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
                    <Typography
                      mb={0}
                      variant="subtitle2"
                      color="seccondary"
                      align="center"
                    >
                        Galería
                    </Typography>
                  </label>
                </form>
              </Grid>
              <Grid item xs={4} justifyContent="center" onClick={() => handleUpload(images)}>
                <CloudUploadTwoToneIcon fontSize="large" style={{width: '100%', color: images.length ? '#0089BE' : 'silver'}} />
                 <Typography
                    mb={0}
                    variant="subtitle2"
                    color="seccondary"
                    align="center"
                    style={{color: images.length ? '#0089BE' : 'silver'}}
                  >
                    Subir todo
                  </Typography>
              </Grid>
            </Grid>
        </CardContent>
      </Card>

      <br />

      {!images.length && (
        <Grid container spacing={0} >
          <Grid item xs={12} justifyContent="center">
            <Typography
              style={{
              marginTop: '3em',
              fontWeight:600,
              color: '#dcdcdccf',
              fontSize: '1.4em'
            }}
              variant="subtitle2"
              color="seccondary"
              align="center"
            >
                Haz nuevas fotos y videos o cargalas desde tu galería y subelos a nuestra nube.
            </Typography>
          </Grid>
          </Grid>
      )}
      {zoom && (
            <Overlay>
              <img alt="cam" onClick={() => removeZoom()} src={zoom} style={{ width: '90%', height: '90%', margin: 'auto', objectFit: 'contain', zIndex: 9999, display: zoom ? 'flex' : 'none'}}/>
            </Overlay>

      )}
      {!zoom && (
        <Grid container spacing={1} columns={2} >
          {images.map((image, index) => (
            <Grid item xs={4} key={index} style={{position: 'relative'}}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <CloseIcon onClick={() => handleRemove(index)} style={{color: '#b90164', backgroundColor: '#ffffffbb', borderRadius: '3px'}}/>
                }
              >
              <Avatar 
                onClick={() => handleZoom(image.snapshot)} 
                src={image.snapshot} 
                variant='rounded'
                style={{ 
                  width: 'calc(100vw/4)',
                  height: 'calc(100vw/4)',
                  maxWidth: '200px',
                  maxHeight: '200px',
                  backgroundColor: '#fafafa',
                  boxShadow: '0px 3px 10px rgb(0 96 126 / 60%)'
                }}
              />
              </Badge>

            </Grid>
          ))}
        </Grid>
      )}
      <Backdrop
        style={{zIndex: 20, color: '#fff'}}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
