import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { getProducts } from '../../reducers/products/productsReducer';
import AdProductCard from '../AdProductCard/AdProductCard';

function AdminPanel() {

	const history = useHistory();

	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	// if (products.length === 0) {
	// 	return <Redirect to='login'/>
	// }

	return (
		<Main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			flexDirection='column'
		>
			<Section bg='black' color='white' height='216px' width='100%'>
				<Box
					flexDirection='column'
					justifyContent='center'
					mx={['20px', '20px', '145px']}
				>
					<Title mb='20px'>Admin Panel (Add, Edit and Delete Products)</Title>
					<Button onClick={() => history.push('/adminpanel/add')} width='150px'>Add Product</Button>
				</Box>
			</Section>
			<Section
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -100 }}
				flexDirection='column'
				display='grid'
				gridTemplateColumns={[
					'repeat(1, minmax(100px, 1fr))',
					'repeat(2, minmax(100px, 1fr))',
					'repeat(2, minmax(100px, 1fr))',
					'repeat(4, minmax(100px, 1fr))',
				]}
				gridGap='30px'
				py='54px'
				px={['20px', '20px', '145px']}
			>
				{products.map((product, index) => (
					<AdProductCard
						key={index}
						id={product._id}
						name={product.name}
						price={product.price}
						thumbnail={product.thumbnail}
					/>
				))}
			</Section>
		</Main>
	);
}

export default AdminPanel;
