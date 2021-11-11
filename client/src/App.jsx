import React, { useEffect, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged, logout } from './reducers/auth/authReducer';
import { clearSuccessMsg } from './reducers/ui/uiReducer';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles/globalStyles';
import Header from './scenes/Header/Header';
import Shop from './scenes/Shop/Shop';
import About from './scenes/About/About';
import Contact from './scenes/Contact/Contact';
import NotFound from './scenes/NotFound/NotFound';
import ProductScreen from './scenes/ProductScreen/ProductScreen';
import Login from './scenes/Login/Login';
import Signup from './scenes/Signup/Signup';
import PublicRoute from './routers/PublicRoute/PublicRoute';
import PrivateRoute from './routers/PrivateRoute/PrivateRoute';
import UserScreen from './scenes/UserScreen/UserScreen';
import CartScreen from './scenes/CartScreen/CartScreen';
import Purchases from './scenes/Purchases/Purchases';
import AdminPanel from './scenes/AdminPanel/AdminPanel';
import AdProductEdit from './scenes/AdProductEdit/AdProductEdit';
import AdProductAdd from './scenes/AdProductAdd/AdProductAdd';
import Popup from './components/Popup/Popup';
import IdleTimer from 'react-idle-timer';

function App() {
	const idleRef = useRef(null);
	const dispatch = useDispatch();
	const { userData, logged } = useSelector((state) => state.auth);
	const { successMsg } = useSelector((state) => state.ui);
	const location = useLocation();

	useEffect(() => {
		dispatch(isLogged());
	}, [dispatch]);

	useEffect(() => {
		setTimeout(() => {
			dispatch(clearSuccessMsg());
		}, 2000);
	}, [dispatch, successMsg]);

	return (
		<>
			<GlobalStyle />
			<Header />
			<IdleTimer
				ref={idleRef}
				timeout={10 * 1000}
				onIdle={() => dispatch(logout())}
				crossTab={{
					emitOnAllTabs: true,
				}}
			/>
			<AnimatePresence exitBeforeEnter>
				{successMsg && <Popup>{successMsg}</Popup>}
			</AnimatePresence>
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
					<PrivateRoute
						exact
						isAuth={userData.isAdmin}
						path='/adminpanel'
						component={AdminPanel}
					/>
					<PrivateRoute
						isAuth={userData.isAdmin}
						path='/adminpanel/productedit/:id'
						component={AdProductEdit}
					/>
					<PrivateRoute
						isAuth={userData.isAdmin}
						path='/adminpanel/add'
						component={AdProductAdd}
					/>
					<Route path='*' component={NotFound} />
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
