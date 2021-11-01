import React from 'react';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

function About() {
	return (
		<Box as='main'>
			<Box as='section' bg='black' color='white' height='216px' width='100%'>
				<Box
					flexDirection='column'
					justifyContent='center'
					mx={['20px', '20px', '145px']}
				>
					<Title>About us</Title>
					<Text>You are curious, dont you?...its ok this page is perfect for you thought</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default About;
