import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getProducts } from '../../redux/reducers/productsReducer';
import ProductCard from '../ProductCard/ProductCard';

function Shop() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<Box as='main' flexDirection='column'>
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
			<Box
				as='section'
				flexDirection='column'
				display='grid'
				gridTemplateColumns={[
					'repeat(1, minmax(100px, 1fr))',
					'repeat(2, minmax(100px, 1fr))',
					'repeat(4, minmax(100px, 1fr))',
				]}
				gridGap='30px'
				py='54px'
				px={['20px', '20px', '145px']}
			>
				{products.map((product) => (
					<ProductCard
						key={product._id}
						name={product.name}
						price={product.price}
						thumbnail={product.thumbnail}
						id={product._id}
					/>
				))}
			</Box>
		</Box>
	);
}

export default Shop;
