import { makeStyles } from "@material-ui/styles";
// Colors
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: 400
    },
    main: {
        marginTop: 8,
        marginBottom: 8
    },
    form: {
        padding: 8,
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    formGroup: {
        padding: 8
    },
    formButtons: {
        padding: 8,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    view: {
        padding: 8
    },
    divider: {
        margin: 8,
        marginTop: 16,
        marginBottom: 16
    },
    drawer: {
        padding: 8,
        minWidth: 100,
        width: "15%"
    },
    footer: {
        padding: 8,
        marginTop: "auto",
        backgroundColor: grey[300],
    },
    inputSlider: {
        marginTop: 4
    }
});

export default useStyles;