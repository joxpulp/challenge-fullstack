import React, { useState } from 'react';
import { Textarea } from './components/Textarea/Textarea';
import GlobalStyle from './globalStyles/globalStyles';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Textarea />
		</div>
	);
}

export default App;
