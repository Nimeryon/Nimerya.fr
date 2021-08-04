import React, { useState, useEffect } from "react";
// Material-ui
import { Box, Grid, Slider, TextField, InputLabel } from "@material-ui/core";
// Style
import useStyles from "../styles/style";

const InputSlider = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.refresh]);

    const handleSliderChange = (event, sliderValue) => {
        props.onChange(sliderValue);
        setValue(sliderValue);
    };

    const handleInputChange = (event) => {
        props.onChange(event.target.value);
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    return <Box width="100%" className={classes.inputSlider}>
        <InputLabel shrink>
            {props.title}
        </InputLabel>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={6} md={9}>
                <Slider
                    value={value}
                    min={props.min ? props.min : 0}
                    max={props.max ? props.max : 100}
                    step={props.step ? props.step : 1}
                    onChange={handleSliderChange}
                />
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField
                    value={value}
                    inputProps={{
                        min: props.min ? props.min : 0,
                        max: props.max ? props.max : 100,
                        step: props.step ? props.step : 1,
                        type: 'number',
                    }}
                    onChange={handleInputChange}
                />
            </Grid>
        </Grid>
    </Box>;
}

export default InputSlider;