import React from 'react';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

function Contact() {
	return (
		<Box as='main'>
			<Box as='section' bg='black' color='white' height='216px' width='100%'>
				<Box
					flexDirection='column'
					justifyContent='center'
					mx={['20px', '20px', '145px']}
				>
					<Title>Contact us</Title>
					<Text>
						We are help!, contac us if you have any question.
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default Contact;
