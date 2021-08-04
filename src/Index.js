import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Views
import Home from "./Views/Home";
import Xp from "./Views/Xp";
// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// Material-ui
import { CssBaseline, Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// Colors
import { deepPurple } from "@material-ui/core/colors";
// Style
import useStyles from './styles/style';

const theme = createTheme({
	palette: {
		primary: deepPurple,
		secondary: deepPurple,
	},
});

const App = () => {
	const classes = useStyles();

	return <ThemeProvider theme={theme}>
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<Navbar />
				<Container className={classes.main} component="main" maxWidth="lg">
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/xp" exact component={() => <Xp />} />
					</Switch>
				</Container>
				<Footer />
			</div>
		</Router>
	</ThemeProvider>;
}

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById('root'));