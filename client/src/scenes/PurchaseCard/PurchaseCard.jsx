import React from 'react';
import { Box } from '../../components/Box/Box';
import { Image } from '../../components/Image/Image';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

function PurchaseCard({ name, price, thumbnail, quantity }) {
	return (
		<Box overflow='hidden' flexDirection='column' width='100%'>
			<Image borderRadius='5px' width='100%' src={thumbnail} alt='productImg' />
			<Title my='15px'>{name}</Title>
			<Text>Qty: {quantity}</Text>
			<Text>USD {price}</Text>
		</Box>
	);
}

export default PurchaseCard;
