import React from 'react';
import { Box } from '../../components/Box/Box';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

function Contact() {
	
	return (
		<Main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Section bg='black' color='white' height='216px' width='100%'>
				<Box
					flexDirection='column'
					justifyContent='center'
					mx={['20px', '20px', '145px']}
				>
					<Title>Contact us</Title>
					<Text>We are help!, contac us if you have any question.</Text>
				</Box>
			</Section>
		</Main>
	);
}

export default Contact;
