import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

function Popup({ error, children }) {
	return (
		<Box position='absolute'  top='5' p='20px' bg={error ? '#FFC7C6' : '#C2FFCE'}>
			<Text color={error ? '#98210A' : '#235234'}>{children}</Text>
		</Box>
	);
}

export default Popup;
