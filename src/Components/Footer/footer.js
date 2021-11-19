// Material-ui
import { Toolbar, Box } from "@material-ui/core";
// Components
import CopyrightComponent from "../../Components/Footer/copyright";
// Style
import useStyles from "../../styles/style";

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