import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/reducers/authReducer';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';
import EditInput from '../../components/EditInput/EditInput';
import EditImage from '../../components/EditImage/EditImage';
import { ImpulseSpinner } from 'react-spinners-kit';


function UserScreen() {
	const dispatch = useDispatch();
	const { userData } = useSelector((state) => state.auth);
	const { loading } = useSelector((state) => state.ui);

	return (
		<Box
			as='main'
			alignItems='center'
			justifyContent='center'
			width='100%'
			my='50px'
		>
			<Box
				as='section'
				bg='white'
				width={['90%', '90%', '50%']}
				height='850px'
				alignItems='center'
				boxShadow='0px 0px 25px 10px #F6F4FD'
				p='10px'
			>
				<Formik
					initialValues={{
						name: '',
						lastname: '',
						age: '',
						cardId: '',
						password: '',
						address: '',
						avatar: null,
					}}
					validationSchema={Yup.object({
						password: Yup.string().min(
							8,
							'Password must be 8 mininum characters'
						),
						name: Yup.string().min(3, 'Minium 3 letters'),
						lastname: Yup.string().min(3, 'Minium 3 letters'),
						age: Yup.number().min(16, 'You must have 16 or more to register'),
						cardId: Yup.string().min(8, 'Card Id must be 8 characters'),
						address: Yup.string().min(
							10,
							'Address must have 10 characters or more'
						),
					})}
					onSubmit={(values) => {
						const formData = new FormData();
						values.name !== '' && formData.append('name', values.name);
						values.lastname !== '' &&
							formData.append('lastname', values.lastname);
						values.age !== '' && formData.append('age', values.age);
						values.address !== '' && formData.append('address', values.address);
						values.password !== '' &&
							formData.append('password', values.password);
						values.avatar && formData.append('avatar', values.avatar);

						dispatch(editUser(formData));
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
							<Title my='10px'>Your Profile</Title>
							<Text mb='10px' color='#A9ABBD'>
								Change everything you want, just click on edit field
							</Text>
							<Text color='#A9ABBD'>
								Click on the image to upload a new avatar
							</Text>
							<EditImage
								label='avatar'
								file={values.avatar}
								onCancel={() => setFieldValue('avatar', null)}
							/>
							<input
								id='avatar'
								type='file'
								onChange={(e) => setFieldValue('avatar', e.target.files[0])}
								style={{ display: 'none' }}
							/>
							<EditInput
								currentValue={userData.name}
								id='name'
								name='name'
								type='text'
								placeholder='Name'
								onCancel={() => setFieldValue('name', '')}
							/>
							<EditInput
								currentValue={userData.lastname}
								id='lastname'
								name='lastname'
								type='text'
								placeholder='Lastname'
								onCancel={() => setFieldValue('lastname', '')}
							/>
							<EditInput
								currentValue={'********'}
								id='password'
								name='password'
								type='password'
								placeholder='Password'
								onCancel={() => setFieldValue('password', '')}
							/>
							<EditInput
								currentValue={userData.age}
								id='age'
								name='age'
								type='number'
								placeholder='Age'
								onCancel={() => setFieldValue('age', '')}
							/>
							<EditInput
								currentValue={userData.cardId}
								id='cardId'
								name='cardId'
								type='text'
								placeholder='Card Id (DNI)'
								onCancel={() => setFieldValue('cardId', '')}
							/>
							<EditInput
								currentValue={userData.address}
								id='address'
								name='address'
								type='text'
								placeholder='Address'
								onCancel={() => setFieldValue('address', '')}
							/>
							<Button
								disabled={loading}
								bg='black'
								color='white'
								my='20px'
								type='submit'
							>
								{loading ? (
									<ImpulseSpinner frontColor='#ffff' backColor='#666666' />
								) : (
									'Save profile'
								)}
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Box>
	);
}

export default UserScreen;