import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getProducts } from '../../redux/reducers/productsReducer';

function Shop() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch]);

	return (
		<Box as='main'>
			<Box as='section' bg='black' color='white' height='216px' width='100%'>
				<Box
					flexDirection='column'
					justifyContent='center'
					mx={['20px', '20px', '145px']}
				>
					<Title>Shop Tech</Title>
					<Text>
						Everything you want, everything fresh and new be always updated with
						latest releases
					</Text>
				</Box>
			</Box>
			<Box as='section'></Box>
		</Box>
	);
}

export default Shop;
