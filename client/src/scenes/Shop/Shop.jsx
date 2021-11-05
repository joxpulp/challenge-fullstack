import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getCart } from '../../redux/reducers/cartReducer';
import { getProducts } from '../../redux/reducers/productsReducer';
import ProductCard from '../ProductCard/ProductCard';
import NoResults from '../../components/NoResults/NoResults'
import { CubeSpinner } from 'react-spinners-kit';

function Shop() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);
	const { loading } = useSelector((state) => state.ui);

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getCart());
	}, [dispatch]);

	if (products.length === 0) {
		return (<NoResults>No products in db</NoResults>)
	}

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
			{loading ? (
				<Box height='80vh' alignItems='center' justifyContent='center'>
					<CubeSpinner size={100} frontColor='#aaaaaa' />
				</Box>
			) : (
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
					initial={{opacity: 0}}
					animate={{opacity: 1}}
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
			)}
		</Box>
	);
}

export default Shop;
