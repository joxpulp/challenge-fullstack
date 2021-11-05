import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { editProductValidation } from '../../helpers/yup';
import {
	editProduct,
	getProductById,
} from '../../redux/reducers/productsReducer';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { ImpulseSpinner } from 'react-spinners-kit';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import EditImage from '../../components/EditImage/EditImage';
import EditInput from '../../components/EditInput/EditInput';
import EditTextarea from '../../components/EditTextarea/EditTextarea';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';

const AdProductEdit = () => {
	const { id } = useParams();

	const history = useHistory();
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.products);
	const { loading, errorMsg } = useSelector((state) => state.ui);

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch, id]);

    if (errorMsg) {
        return <Redirect to='/login'/>
    }

	return (
		<Main alignItems='center' justifyContent='center' width='100%' my='50px'>
			<Section
				bg='white'
				width={['90%', '90%', '70%']}
				height='850px'
				alignItems='center'
				boxShadow='0px 0px 25px 10px #F6F4FD'
				p='20px'
				initial={{ opacity: 0, x: '-90%' }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: '-90%' }}
			>
				<Formik
					initialValues={{
						name: '',
						description: '',
						category: '',
						price: '',
						thumbnail: null,
					}}
					validationSchema={editProductValidation}
					onSubmit={(values) => {
						const formData = new FormData();
						values.name !== '' && formData.append('name', values.name);
						values.description !== '' &&
							formData.append('description', values.description);
						values.category !== '' &&
							formData.append('category', values.category);
						values.price !== '' && formData.append('price', values.price);
						values.thumbnail && formData.append('thumbnail', values.thumbnail);

						dispatch(editProduct({ id, formData }));
					}}
				>
					{({ values, setFieldValue }) => (
						<Form
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Title my='10px'>Edit Product</Title>

							<Text color='#A9ABBD'>
								Click on the image to upload a new thumbnail
							</Text>
							{product.map((product) => (
								<>
									<EditImage
										currentImage={product.thumbnail}
										label='thumbnail'
										file={values.thumbnail}
										onCancel={() => setFieldValue('thumbnail', null)}
									/>
									<input
										id='thumbnail'
										type='file'
										onChange={(e) =>
											setFieldValue('thumbnail', e.target.files[0])
										}
										style={{ display: 'none' }}
									/>
									<EditInput
										currentValue={product.name}
										id='name'
										name='name'
										type='text'
										placeholder='Name'
										width='400px'
										onCancel={() => setFieldValue('name', '')}
									/>
									<EditTextarea
										currentValue={product.description}
										id='description'
										name='description'
										type='text'
										width='400px'
										placeholder='Description'
										onCancel={() => setFieldValue('description', '')}
									/>

									<EditInput
										currentValue={product.category}
										id='category'
										name='category'
										type='text'
										placeholder='category'
										width='400px'
										onCancel={() => setFieldValue('category', '')}
									/>
									<EditInput
										currentValue={product.price}
										id='price'
										name='price'
										type='number'
										placeholder='Price'
										width='400px'
										onCancel={() => setFieldValue('price', '')}
									/>
								</>
							))}
							<Box alignItems='center'>
								<Button
									disabled={loading}
									bg='black'
									color='white'
									mr='10px'
									type='submit'
								>
									{loading ? (
										<ImpulseSpinner frontColor='#ffff' backColor='#666666' />
									) : (
										'Save'
									)}
								</Button>
								<Button onClick={() => history.go(-1)}>Go Back</Button>
							</Box>
						</Form>
					)}
				</Formik>
			</Section>
		</Main>
	);
};

export default AdProductEdit;
