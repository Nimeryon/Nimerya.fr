import { Component } from "react";
// Material-ui
import { AppBar, Toolbar, Typography, Link, Box } from "@material-ui/core";
// Style
import useStyles from "../styles/style";

class CopyrightComponent extends Component {
    render() {
        return (
            <Typography variant="body1" color="textSecondary">
                {"© "}
                <Link color="inherit" href="/">Nimerya</Link>
                {" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }
}

const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.footer}>
        <Toolbar variant="dense">
            <Box width="100%" display="flex" justifyContent="center">
                <CopyrightComponent />
            </Box>
        </Toolbar>
    </footer>;
}

export default Footer;