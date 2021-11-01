import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './globalStyles/Theme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Theme>
			<Router>
				<App />
			</Router>
		</Theme>
	</React.StrictMode>,
	document.getElementById('root')
);
