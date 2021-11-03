import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box } from '../../components/Box/Box';
import Input from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';
import { Text } from '../../components/Text/Text';
import { signup } from '../../redux/reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMsg, clearSuccessMsg } from '../../redux/reducers/uiReducer';

function Signup() {
	const dispatch = useDispatch();
	const { errorMsg, successMsg } = useSelector((state) => state.ui);

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
						email: '',
						password: '',
						name: '',
						lastname: '',
						age: '',
						cardId: '',
						address: '',
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('The email address is invalid, try again')
							.required('Email is required'),
						password: Yup.string()
							.min(8, 'Password must be 8 mininum characters')
							.required('Password is required'),
						name: Yup.string()
							.min(3, 'Minium 3 letters')
							.required('Name is Required'),
						lastname: Yup.string()
							.min(3, 'Minium 3 letters')
							.required('Lastname is Required'),
						age: Yup.number()
							.min(16, 'You must have 16 or more to register')
							.required('Age is required'),
						cardId: Yup.string()
							.matches(/^\d{8}$/, 'Card Id must be 8 characters')
							.required('Card Id (DNI) is required'),
						address: Yup.string()
							.min(10, 'Address must have 10 characters or more')
							.required('Address is required'),
					})}
					onSubmit={(values) => {
						dispatch(clearSuccessMsg());
						dispatch(clearErrorMsg());
						dispatch(signup(values));
					}}
				>
					<Form
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Title my='10px'>Signup</Title>
						<Text color='#A9ABBD'>Fill your info</Text>
						{errorMsg && (
							<Text m='20px' color='#b62929'>
								{errorMsg}
							</Text>
						)}
						{successMsg && (
							<Text m='20px' color='#29b669'>
								{successMsg}
							</Text>
						)}
						<Input id='email' name='email' type='email' placeholder='Email*' />
						<Input
							id='password'
							name='password'
							type='password'
							placeholder='Password*'
						/>
						<Input id='name' name='name' type='text' placeholder='Name*' />
						<Input
							id='lastname'
							name='lastname'
							type='text'
							placeholder='Lastname*'
						/>
						<Input id='age' name='age' type='number' placeholder='Age*' />
						<Input
							id='cardId'
							name='cardId'
							type='number'
							placeholder='Card Id (DNI)*'
						/>
						<Input
							id='address'
							name='address'
							type='text'
							placeholder='Address*'
						/>
						<Button bg='black' color='white' my='20px' type='submit'>
							Signup
						</Button>
					</Form>
				</Formik>
			</Box>
		</Box>
	);
}

export default Signup;
