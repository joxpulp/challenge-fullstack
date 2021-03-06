import React, { useEffect, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn, logout } from './reducers/auth/authReducer';
import { clearSuccessMsg } from './reducers/ui/uiReducer';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles/globalStyles';
import Header from './scenes/Header/Header';
import ShopPage from './scenes/ShopPage/ShopPage';
import AboutPage from './scenes/AboutPage/AboutPage';
import ContactPage from './scenes/ContactPage/ContactPage';
import NotFoundPage from './scenes/NotFoundPage/NotFoundPage';
import ProductPage from './scenes/ProductPage/ProductPage';
import LoginPage from './scenes/LoginPage/LoginPage';
import SignupPage from './scenes/SignupPage/SignupPage';
import PublicRoute from './routers/PublicRoute/PublicRoute';
import PrivateRoute from './routers/PrivateRoute/PrivateRoute';
import EditUserPage from './scenes/EditUserPage/EditUserPage';
import CartPage from './scenes/CartPage/CartPage';
import PurchasesPage from './scenes/PurchasesPage/PurchasesPage';
import AdminPanelPage from './scenes/AdminPanelPage/AdminPanelPage';
import AdProductEdit from './scenes/AdProductEdit/AdProductEdit';
import AdProductAdd from './scenes/AdProductAdd/AdProductAdd';
import Popup from './components/Popup/Popup';
import IdleTimer from 'react-idle-timer';
import { Box } from './components/Box/Box';

function App() {
	const idleRef = useRef(null);
	const dispatch = useDispatch();
	const { userData, loggedIn } = useSelector((state) => state.auth);
	const { successMsg } = useSelector((state) => state.ui);
	const location = useLocation();

	useEffect(() => {
		dispatch(isLoggedIn());
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
				timeout={1000 * 120}
				onIdle={() => dispatch(logout())}
				crossTab={{
					emitOnAllTabs: true,
				}}
			/>
			<AnimatePresence exitBeforeEnter>
				{successMsg && <Popup>{successMsg}</Popup>}
			</AnimatePresence>
			<Box pt='60px' width='100%'>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path='/' component={ShopPage} />
						<Route path='/product/:id' component={ProductPage} />
						<Route path='/about' component={AboutPage} />
						<Route path='/contact' component={ContactPage} />
						<PublicRoute
							isAuth={loggedIn}
							path='/login'
							component={LoginPage}
						/>
						<PublicRoute
							isAuth={loggedIn}
							path='/signup'
							component={SignupPage}
						/>
						<PrivateRoute
							isAuth={loggedIn}
							path='/profile'
							component={EditUserPage}
						/>
						<PrivateRoute isAuth={loggedIn} path='/cart' component={CartPage} />
						<PrivateRoute
							isAuth={loggedIn}
							path='/purchases'
							component={PurchasesPage}
						/>
						<PrivateRoute
							exact
							isAuth={userData.isAdmin}
							path='/adminpanel'
							component={AdminPanelPage}
						/>
						<PrivateRoute
							isAuth={userData.isAdmin}
							path='/adminpanel/add'
							component={AdProductAdd}
						/>
						<PrivateRoute
							isAuth={userData.isAdmin}
							path='/adminpanel/productedit/:id'
							component={AdProductEdit}
						/>
						<Route path='*' component={NotFoundPage} />
					</Switch>
				</AnimatePresence>
			</Box>
		</>
	);
}

export default App;
