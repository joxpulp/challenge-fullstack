import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ImpulseSpinner } from 'react-spinners-kit';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import NoResults from '../../components/NoResults/NoResults';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getCart } from '../../redux/reducers/cartReducer';
import { purchase } from '../../redux/reducers/purchaseReducer';
import CartCard from '../CartCard/CartCard';

function CartScreen() {
	const { cartData, total } = useSelector((state) => state.cart);
	const { purchases } = useSelector((state) => state.purchase);
	const { loading } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	const history = useHistory();

	const handlePurchase = () => {
		dispatch(purchase());
	};

	useEffect(() => {
		dispatch(getCart());
	}, [dispatch, purchases]);

	if (cartData.length === 0) {
		return <NoResults>Your cart is empty :(</NoResults>;
	}

	return (
		<Box
			as='main'
			alignItems='center'
			width='100%'
			my={['20px', '20px', '50px']}
		>
			<Box as='section' mx={['20px', '20px', '145px']} flexDirection='column'>
				<Box flexDirection='column' mb='45px'>
					<Title>Your Cart</Title>
					<Text my='20px' cursor='pointer' onClick={() => history.push('/')}>
						Not ready to checkout? Continue shopping
					</Text>
				</Box>
				<Box flexDirection={['column', 'column', 'row']}>
					<Box flexDirection='column'>
						{cartData.map((cartProduct) => (
							<CartCard
								key={cartProduct._id}
								name={cartProduct.name}
								price={cartProduct.price}
								thumbnail={cartProduct.thumbnail}
								productId={cartProduct._id}
							/>
						))}
					</Box>
					<Box flexDirection='column' py='30px'>
						<Title py='20px' borderBottom='1px solid black'>
							Order Summary
						</Title>
						<Title my='20px'>Total: ${total}</Title>
						<Button
							disabled={loading}
							onClick={handlePurchase}
							bg='black'
							color='white'
						>
							{loading ? (
								<ImpulseSpinner frontColor='#ffff' backColor='#666666' />
							) : (
								'Purchase'
							)}
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default CartScreen;
