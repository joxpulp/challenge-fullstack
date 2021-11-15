import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../reducers/auth/authReducer';
import { clearErrorMsg } from '../../reducers/ui/uiReducer';
import { Form, Formik } from 'formik';
import { signupValidation } from '../../helpers/yup';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { Text } from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Signup() {
	const history = useHistory();

	const dispatch = useDispatch();
	const { loading, errorMsg } = useSelector((state) => state.ui);

	return (
		<Main
			overflow='hidden'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			width='100%'
			py='50px'
			initial={{ opacity: 0, x: '80%' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '80%' }}
		>
			<Section
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
					validationSchema={signupValidation}
					onSubmit={(values, { resetForm }) => {
						dispatch(clearErrorMsg());
						dispatch(signup(values));
						resetForm();
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
						<Input
							id='email'
							name='email'
							type='email'
							placeholder='Email*'
							disabled={loading}
						/>
						<Input
							id='password'
							name='password'
							type='password'
							placeholder='Password*'
							disabled={loading}
						/>
						<Input id='name' name='name' type='text' placeholder='Name*' />
						<Input
							id='lastname'
							name='lastname'
							type='text'
							placeholder='Lastname*'
							disabled={loading}
						/>
						<Input id='age' name='age' type='number' placeholder='Age*' />
						<Input
							id='cardId'
							name='cardId'
							type='number'
							placeholder='Card Id (DNI)*'
							disabled={loading}
						/>
						<Input
							id='address'
							name='address'
							type='text'
							placeholder='Address*'
							disabled={loading}
						/>
						<Button>Sign Up</Button>
					</Form>
				</Formik>
			</Section>
			<Text m='30px' cursor='pointer' onClick={() => history.push('/login')}>
				Or go to login
			</Text>
		</Main>
	);
}

export default Signup;
