import React, { useState } from "react";
// Material-ui
import { Paper, Box, Typography, Divider, Grid } from "@material-ui/core";
// Components
import InputSlider from "../../Components/inputSlider";
// Style
import useStyles from "../../styles/style";

const Form = (props) => {
    const classes = props.classes;

    return <Grid container spacing={3} direction="row">
    </Grid >;
}

const Shape = () => {
    const classes = useStyles();

    return <Paper className={classes.view} elevation={1}>
        <Box width="100%" display="flex" justifyContent="center">
            <Typography variant="h4">Shape Generator</Typography>
        </Box>
        <Divider className={classes.divider} />
        <Form classes={classes} />
    </Paper>
}

export default Shape;