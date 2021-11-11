import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getCart } from '../../reducers/cart/cartReducer';
import { getPurchase } from '../../reducers/purchase/purchaseReducer';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import NoResults from '../../components/NoResults/NoResults';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';

const Purchases = () => {
	const dispatch = useDispatch();
	const { purchases } = useSelector((state) => state.purchase);

	useEffect(() => {
		dispatch(getPurchase());
		dispatch(getCart());
	}, [dispatch]);

	if (purchases.length === 0) {
		return <NoResults>You dont have any purchases</NoResults>;
	}

	return (
		<Main
			flexDirection='column'
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
					<Title>Your Purchases</Title>
					<Text>This are your last purchases</Text>
				</Box>
			</Section>
			<Section
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
				{purchases.map((product, index) => (
					<PurchaseCard
						key={index}
						name={product.name}
						price={product.price}
						thumbnail={product.thumbnail}
					/>
				))}
			</Section>
		</Main>
	);
};

export default Purchases;
