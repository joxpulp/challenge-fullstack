import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#0D0D0D',
		secondary: '#979797',
		text: '#151875',
		subtext: '#9096B2',
	},
	fonts: {
		josefin: `'Josefin Sans', sans-serif`,
		lato: `'Lato', sans-serif`,
	},
};

function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
