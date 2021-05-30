import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    secondary: {
        marginTop: '.5rem',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(1.2),
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.palette.common.white,
    },
    footerButton: {
        width: '100%',
    },
}));

const ReportCard = ({
    primary,
    secondary,
    iconPrimary,
    color,
    footerData,
    iconFooter,
    footerAction,
    children,
}) => {
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    const IconFooter = iconFooter;
    const footerIcon = iconFooter ? <IconFooter /> : null;

    return (
        <Card>
            <CardContent>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" style={{ color: color }}>
                            {primary}
                        </Typography>
                        <>
                            { children ? (
                                <>{children}</>
                            ) : (
                                <Typography variant="subtitle1" className={classes.secondary}>
                                    {secondary}
                                </Typography>
                            )}
                        </>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ color: color }}>
                            {primaryIcon}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Button style={{ background: color }} disabled={footerAction === undefined} onClick={footerAction} className={classes.footerButton}>
                <Grid container justify="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography variant="body2">{footerData}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{footerIcon}</Typography>
                    </Grid>
                </Grid>
            </Button>
        </Card>
    );
};

export default ReportCard;
