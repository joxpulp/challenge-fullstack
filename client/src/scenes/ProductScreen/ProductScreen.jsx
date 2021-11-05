import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Image } from '../../components/Image/Image';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { getProductById } from '../../redux/reducers/productsReducer';
import { CubeSpinner } from 'react-spinners-kit';
import { addProductCart } from '../../redux/reducers/cartReducer';

function ProductScreen() {
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
		return <Redirect to='/login' />;
	}

	return (
		<Box
			as='main'
			alignItems='center'
			justifyContent='center'
			width='100%'
			my={['20px', '20px', '50px']}
		>
			{loading ? (
				<Box height='80vh' alignItems='center'>
					<CubeSpinner size={100} frontColor='#aaaaaa' />
				</Box>
			) : (
				product.map((product) => (
					<Box
						as='section'
						bg='white'
						color='black'
						width={['90%', '90%', '80%']}
						flexDirection={['column', 'column', 'row']}
						boxShadow='0px 0px 25px 10px #F6F4FD'
						p='5px'
						key={product._id}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
					>
						<Image width={['100%', '100%', '50%']} src={product.thumbnail} />
						<Box
							width='100%'
							p={['5px', '5px', '10px', '20px']}
							flexDirection='column'
							justifyContent='center'
						>
							<Title my='10px'>{product.name}</Title>
							<Text mb='20px'>Price: USD {product.price}</Text>
							<Text mb='10px' fontSize='12px'>
								Description:
							</Text>
							<Text fontSize='12px'>{product.description}</Text>
							<Box mt='20px'>
								<Button onClick={handleCart} mr='10px' bg='black' color='white'>
									Add to cart
								</Button>
								<Button onClick={() => history.push('/')}>Go Back</Button>
							</Box>
						</Box>
					</Box>
				))
			)}
		</Box>
	);
}

export default ProductScreen;
