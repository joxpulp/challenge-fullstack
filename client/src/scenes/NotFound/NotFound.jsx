import React from 'react';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Image } from '../../components/Image/Image';
import { Button } from '../../components/Button/Button';
import notfound from '../../services/svg/404.svg';
import { useHistory } from 'react-router-dom';
import { Section } from '../../components/Section/Section';

function NotFound() {
	const history = useHistory();
	return (
		<Section
			flexDirection='column'
			width='100%'
			height='100vh'
			alignItems='center'
			justifyContent='center'
		>
			<Image src={notfound} alt='404' />
			<Text mb='20px'>Oops! Seems that this page does not exist</Text>
			<Button
				bg='black'
				color='white'
				width='125px'
				onClick={() => history.push('/')}
			>
				Back to Shop
			</Button>
		</Section>
	);
}

export default NotFound;
