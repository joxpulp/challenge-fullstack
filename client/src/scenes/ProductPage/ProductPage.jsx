import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Image } from '../../components/Image/Image';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getProductById } from '../../reducers/products/productsReducer';
import { CubeSpinner } from 'react-spinners-kit';
import { addProductCart } from '../../reducers/cart/cartReducer';
import { AnimatePresence } from 'framer-motion';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { ButtonBase } from '../../components/Button/ButtonBase/ButtonBase';

function ProductPage() {
	const { id } = useParams();
	const history = useHistory();

	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.products);
	const { loading, errorMsg } = useSelector((state) => state.ui);

	const handleCart = () => {
		dispatch(addProductCart(id));
	};

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch, id]);

	if (errorMsg) {
		return (
			<Box animate={{ opacity: 0, x: 0 }} exit={{ opacity: 0, x: 100 }}>
				<Redirect to='/login' />;
			</Box>
		);
	}

	return (
		<Main
			alignItems='center'
			justifyContent='center'
			width='100%'
			my={['20px', '20px', '50px']}
			initial={{ opacty: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 300 }}
		>
			<AnimatePresence exitBeforeEnter>
				{loading ? (
					<Box
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 200 }}
						height='50vh'
						alignItems='center'
					>
						<CubeSpinner size={100} frontColor='#aaaaaa' />
					</Box>
				) : (
					product.map((product) => (
						<Section
							bg='white'
							color='black'
							width={['90%', '90%', '80%']}
							flexDirection={['column', 'column', 'row']}
							boxShadow='0px 0px 25px 10px #F6F4FD'
							p='5px'
							key={product._id}
						>
							<Image
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								width={['100%', '100%', '50%']}
								src={product.thumbnail}
							/>
							<Box
								width='100%'
								p={['5px', '5px', '10px', '20px']}
								flexDirection='column'
								justifyContent='center'
								initial={{ opacity: 0, y: -100 }}
								animate={{ opacity: 1, y: 0 }}
							>
								<Title my='10px'>{product.name}</Title>
								<Text mb='20px'>Price: USD {product.price}</Text>
								<Text mb='10px' fontSize='12px'>
									Category: {product.category}
								</Text>
								<Text mb='10px' fontSize='12px'>
									Description:
								</Text>
								<Text fontSize='12px'>{product.description}</Text>
								<Box mt='20px'>
									<ButtonBase
										onClick={handleCart}
										mr='10px'
										bg='black'
										color='white'
									>
										Add to cart
									</ButtonBase>
									<ButtonBase onClick={() => history.push('/')}>
										Go Back
									</ButtonBase>
								</Box>
							</Box>
						</Section>
					))
				)}
			</AnimatePresence>
		</Main>
	);
}

export default ProductPage;
