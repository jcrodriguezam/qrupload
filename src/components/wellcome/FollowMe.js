import React from 'react';
import {
    Divider,
    Typography,
    makeStyles,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

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

const ForgotPassword = ({updatePanel, goBack, next}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [isSended, setIsSended] = React.useState(false);
    const handleSetEmail = (value) => setEmail(value);
    const handleSetIsSended = (value) => setIsSended(value);

    return (
        <>
            <Grid container justify="flex-start" className={classes.margin}>
                <Grid item>
                    <Typography
                        variant="subtitle2"
                        color="primary"
                        className={classes.forgot}
                        onClick={() => goBack()}
                    >
                        &lt; Atrás
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Typography
                    color="primary"
                    className={classes.title}
                >
                    Sube a nuestra nube
                </Typography>
                <br />
                <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.text}
                    style={{display: !isSended ? 'flex' : 'none'}}
                >
                    Dejanos tu email y compartiremos contigo el album de nuestra boda.
                </Typography>
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    type="email"
                    defaultValue={email}
                    variant="outlined"
                    onChange={(e) => {handleSetEmail(e.target.value)}}
                />
                <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    style={{display: !isSended ? 'flex' : 'none'}}
                    onClick={async () => {
                        next()
                    }}
                >
                    {email ? 'Comenzar !!' : 'No quiero dejar mi email'}
                </Button>
            </Grid>
            <Divider />
       
        </>
    );
};

export default ForgotPassword;
