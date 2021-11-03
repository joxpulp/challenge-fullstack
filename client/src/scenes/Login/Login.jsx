import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box } from '../../components/Box/Box';
import Input from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';
import { Text } from '../../components/Text/Text';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/authReducer';
import { ImpulseSpinner } from 'react-spinners-kit';
import { clearErrorMsg } from '../../redux/reducers/uiReducer';

function Login() {
	const history = useHistory();

	const dispatch = useDispatch();
	const { loading, errorMsg } = useSelector((state) => state.ui);

	const handleClickSignup = () => {
		history.push('/signup');
		dispatch(clearErrorMsg())
	}

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
				height='500px'
				alignItems='center'
				boxShadow='0px 0px 25px 10px #F6F4FD'
				p='10px'
			>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('The email address is invalid, try again')
							.required('Required'),
						password: Yup.string()
							.min(8, 'Password must be 8 mininum characters')
							.required('Required'),
					})}
					onSubmit={({ email, password }) => {
						dispatch(clearErrorMsg());
						dispatch(login({ email, password }));
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
						<Title my='10px'>Welcome Back</Title>
						<Text color='#A9ABBD'>Login with your email:</Text>
						{errorMsg && (
							<Text m='20px' color='#b62929'>
								{errorMsg}
							</Text>
						)}
						<Input
							disabled={loading}
							id='email'
							name='email'
							type='email'
							placeholder='Email'
						/>
						<Input
							disabled={loading}
							id='password'
							name='password'
							type='password'
							placeholder='Password'
						/>
						<Box width='100%' justifyContent='center' mt='20px'>
							<Button
								bg='black'
								color='white'
								type='submit'
								mr='10px'
								disabled={loading}
							>
								{loading ? (
									<ImpulseSpinner frontColor='#ffff' backColor='#666666' />
								) : (
									'Login'
								)}
							</Button>
							<Button
								onClick={handleClickSignup}
								type='button'
								disabled={loading}
							>
								Signup
							</Button>
						</Box>
					</Form>
				</Formik>
			</Box>
		</Box>
	);
}

export default Login;
