import React from 'react';
import GlobalStyle from './globalStyles/globalStyles';
import Header from './scenes/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Shop from './scenes/Shop/Shop';
import About from './scenes/About/About';
import Contact from './scenes/Contact/Contact';
import NotFound from './scenes/NotFound/NotFound';
import ProductScreen from './scenes/ProductScreen/ProductScreen';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/'>
					<Shop />
				</Route>
				<Route path='/product/:id'>
					<ProductScreen />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
