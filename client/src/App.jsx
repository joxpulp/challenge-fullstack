import React from 'react';
import GlobalStyle from './globalStyles/globalStyles';
import Header from './scenes/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Shop from './scenes/Shop/Shop';
import About from './scenes/About/About';
import Contact from './scenes/Contact/Contact';
import NotFound from './scenes/NotFound/NotFound';
import ProductScreen from './scenes/ProductScreen/ProductScreen';
import Login from './scenes/Login/Login';
import PublicRoute from './routers/PublicRoute/PublicRoute';
import Signup from './scenes/Signup/Signup';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/' component={Shop} />
				<Route path='/product/:id' component={ProductScreen} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<PublicRoute path='/login' component={Login}/>
				<PublicRoute path='/signup' component={Signup}/>
				<Route path='*' component={NotFound} />
			</Switch>
		</>
	);
}

export default App;
