import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Image } from '../../components/Image/Image';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { clearProduct } from '../../reducers/products/productsReducer';
import { clearErrorMsg } from '../../reducers/uiReducer';

function ProductCard({ name, price, thumbnail, id }) {
	const history = useHistory();
	const dispatch = useDispatch()

	const handleClick = () => {
		history.push(`/product/${id}`);
		dispatch(clearProduct())
		dispatch(clearErrorMsg())
	}

	return (
		<Box
			onClick={handleClick}
			overflow='hidden'
			flexDirection='column'
			width='100%'
			cursor='pointer'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Image borderRadius='5px' width='100%' src={thumbnail} alt='productImg' />
			<Title my='15px'>{name}</Title>
			<Text>USD {price}</Text>
		</Box>
	);
}

export default ProductCard;
