import React from 'react';
import {
    Divider,
    Typography,
    makeStyles,
    Grid,
    TextField,
    Button,
    Avatar
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import pareja from './../../assets/images/pareja.jpeg';

const useStyles = makeStyles((theme) => ({
    forgot: {
        paddingLeft: '16px',
        textDecoration: 'none',
        display: 'block',
        marginTop: '0em',
        marginBottom: '1em',
        cursor: 'pointer',
    },
    title: {
        textDecoration: 'none',
        fontSize: '24px',
        textAlign: 'center'
    },
    subtitle: {
        textDecoration: 'none',
        textAlign: 'center'
    },
    text: {
        textDecoration: 'none',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));

const ThankYou = ({ goBack}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [isSended, setIsSended] = React.useState(false);
    const handleSetEmail = (value) => setEmail(value);
    const handleSetIsSended = (value) => setIsSended(value);

    return (
        <>
            <Grid item xs={12}>
                <Typography
                    color="#0089BE"
                    className={classes.title}
                    style={{color: '#0089BE'}}
                >
                    ¡¡¡ Gracias !!!
                </Typography>
                <br />
                <Avatar alt="Remy Sharp" src={pareja}  style={{ width: '100%', height: 140, margin: 'auto' }} variant="rounded"/>
                <br />
                <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.text}
                    style={{display: 'flex' , marginBottom: '1em'}}
                >
                    Se ha subido correctamente.
                </Typography>
                <Button
                    fullWidth
                    color="#b90164"
                    variant="outlined"
                    style={{display:'flex', color: '#b90164', border: '1px solid #b90164'}}
                    onClick={() => goBack()}
                >
                    cargar mas archivos
                </Button>
            </Grid>
            <Divider />
       
        </>
    );
};

export default ThankYou;
