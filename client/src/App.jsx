import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles/globalStyles';
import Header from './scenes/Header/Header';
import { Switch, Route, useLocation } from 'react-router-dom';
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
import CartScreen from './scenes/CartScreen/CartScreen';
import Purchases from './scenes/Purchases/Purchases';
import { AnimatePresence } from 'framer-motion';

function App() {
	const dispatch = useDispatch();

	const { logged } = useSelector((state) => state.auth);
	const location = useLocation();

	useEffect(() => {
		dispatch(isLogged());
	}, [dispatch]);

	return (
		<>
			<GlobalStyle />
			<Header />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={Shop} />
					<Route path='/product/:id'>
						<ProductScreen />
					</Route>
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<PublicRoute isAuth={logged} path='/login' component={Login} />
					<PublicRoute isAuth={logged} path='/signup' component={Signup} />
					<PrivateRoute
						isAuth={logged}
						path='/profile'
						component={UserScreen}
					/>
					<PrivateRoute isAuth={logged} path='/cart' component={CartScreen} />
					<PrivateRoute
						isAuth={logged}
						path='/purchases'
						component={Purchases}
					/>
					<Route path='*' component={NotFound} />
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
