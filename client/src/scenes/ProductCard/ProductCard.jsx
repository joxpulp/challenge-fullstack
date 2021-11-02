import React from 'react';
import { Box } from '../../components/Box/Box';
import { Image } from '../../components/Image/Image';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

function ProductCard({ name, price, thumbnail }) {
	return (
		<Box
            overflow='hidden'
			flexDirection='column'
			width='100%'
			cursor='pointer'
		>
			<Image borderRadius='5px' width='100%' src={thumbnail} alt='productImg' />
			<Title my='20px'>{name}</Title>
			<Text>USD {price}</Text>
		</Box>
	);
}

export default ProductCard;
