import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#FB2E86',
		secondary: '#F1F0FF',
		text: '#151875',
		subtext: '#9096B2',
	},
	fonts: {
		primary: `'Josefin Sans', sans-serif`,
		secondary: `'Lato', sans-serif`,
	},
};

function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
