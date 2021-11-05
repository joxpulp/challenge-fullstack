import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { addProductValidation } from '../../helpers/yup';
import { addProduct } from '../../redux/reducers/productsReducer';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import { ImpulseSpinner } from 'react-spinners-kit';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import EditImage from '../../components/EditImage/EditImage';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import uploadphoto from '../../services/svg/uploadphoto.svg';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';

const AdProductAdd = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { loading, errorMsg } = useSelector((state) => state.ui);

	if (errorMsg) {
		return <Redirect to='/login' />;
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
					validationSchema={addProductValidation}
					onSubmit={(values) => {
						const formData = new FormData();
						values.name !== '' && formData.append('name', values.name);
						values.description !== '' &&
							formData.append('description', values.description);
						values.category !== '' &&
							formData.append('category', values.category);
						values.price !== '' && formData.append('price', values.price);
						values.thumbnail && formData.append('thumbnail', values.thumbnail);
                        console.log(values)
						dispatch(addProduct(formData));
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
							<Title my='10px'>Add a new product</Title>

							<Text color='#A9ABBD'>
								Click on the image to upload a new thumbnail
							</Text>

							<EditImage
								currentImage={uploadphoto}
								label='thumbnail'
								file={values.thumbnail}
								onCancel={() => setFieldValue('thumbnail', null)}
							/>
							<input
								id='thumbnail'
								type='file'
								onChange={(e) => setFieldValue('thumbnail', e.target.files[0])}
								style={{ display: 'none' }}
							/>
							<Input id='name' name='name' type='text' placeholder='Name*' />
							<Textarea
								id='description'
								name='description'
                                type='text'
								placeholder='Description*'
							/>

							<Input
								id='category'
								name='category'
								type='text'
								placeholder='Category*'
							/>
							<Input
								id='price'
								name='price'
								type='number'
								placeholder='Price*'
							/>
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
										'Add Product'
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

export default AdProductAdd;
