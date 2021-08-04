import React, { Component, Fragment, useState } from "react";
// Material-ui
import { IconButton, AppBar, Toolbar, Typography, Link, SwipeableDrawer, Box, Divider, Container } from "@material-ui/core";
import { MenuRounded, CloseRounded, ArrowRightRounded } from "@material-ui/icons";
// Style
import useStyles from "../styles/style";

class CurrentLink extends Component {
    constructor(props) {
        super(props);
        this.isCurrentRoute = props.url == window.location.pathname;
    }

    render() {
        return <Box width="100%" display="flex" justifyContent="center">
            <Box width="25%" display="flex" justifyContent="center">
                {this.isCurrentRoute ? (<ArrowRightRounded fontSize="large" style={{ alignSelf: "flex-start" }} />) : null}
            </Box>
            <Box width="75%">
                <Link color="inherit" href={this.props.url} style={{ alignSelf: "flex-end" }}>
                    <Typography align="right" variant="h6">
                        {this.props.title}
                    </Typography>
                </Link>
            </Box>
        </Box>
    }
}

class NavbarComponents extends Component {
    render() {
        return <AppBar position="relative">
            <Toolbar variant="dense">
                <IconButton
                    color="inherit"
                    onClick={() => this.props.toggleMenu(true)}>
                    <MenuRounded />
                </IconButton>
                <Typography variant="h6">
                    <Link href="/" color="inherit">
                        {this.props.title}
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>;
    }
}

const Navbar = () => {
    const classes = useStyles();
    const [menuOpened, toggleMenu] = useState(false);
    const toggleDrawer = (value) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        toggleMenu(value);
    };

    return <Fragment>
        <NavbarComponents title="PMMO Configurator" toggleMenu={toggleMenu} />
        <SwipeableDrawer anchor="left" open={menuOpened} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
            <Container className={classes.drawer}>
                <Box width="100%" display="flex" alignContent="center" justifyContent="center">
                    <IconButton
                        color="inherit"
                        onClick={() => toggleMenu(false)}>
                        <CloseRounded />
                    </IconButton>
                </Box>
                <Divider className={classes.divider} />
                <CurrentLink classes={classes} url="/" title="Home" />
                <CurrentLink classes={classes} url="/xp" title="Xp" />
            </Container>
        </SwipeableDrawer>
    </Fragment>;
}

export default Navbar;