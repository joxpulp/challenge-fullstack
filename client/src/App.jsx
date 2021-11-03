import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles/globalStyles';
import Header from './scenes/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Shop from './scenes/Shop/Shop';
import About from './scenes/About/About';
import Contact from './scenes/Contact/Contact';
import NotFound from './scenes/NotFound/NotFound';
import ProductScreen from './scenes/ProductScreen/ProductScreen';
import Login from './scenes/Login/Login';
import Signup from './scenes/Signup/Signup';
import PublicRoute from './routers/PublicRoute/PublicRoute';
import PrivateRoute from './routers/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from './redux/reducers/authReducer';
import UserScreen from './scenes/UserScreen/UserScreen';

function App() {
	const dispatch = useDispatch();

	const { logged } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(isLogged());
	}, [dispatch]);

	console.log(logged)
	return (
		<>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/' component={Shop} />
				<Route path='/product/:id' component={ProductScreen} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<PublicRoute isAuth={logged} path='/login' component={Login} />
				<PublicRoute isAuth={logged} path='/signup' component={Signup} />
				<PrivateRoute isAuth={logged} path='/profile' component={UserScreen} />
				<Route path='*' component={NotFound} />
			</Switch>
		</>
	);
}

export default App;
