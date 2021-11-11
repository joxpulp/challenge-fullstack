import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducers/auth/authReducer';
import { clearErrorMsg, clearSuccessMsg } from '../../reducers/ui/uiReducer';
import { Form, Formik } from 'formik';
import { loginValidation } from '../../helpers/yup';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';
import { Text } from '../../components/Text/Text';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import Input from '../../components/Input/Input';
import { ImpulseSpinner } from 'react-spinners-kit';

function Login() {
	const history = useHistory();

	const dispatch = useDispatch();
	const { loading, errorMsg } = useSelector((state) => state.ui);

	const handleClickSignup = () => {
		history.push('/signup');
		dispatch(clearErrorMsg());
		dispatch(clearSuccessMsg());
	};

	return (
		<Main
			alignItems='center'
			justifyContent='center'
			width='100%'
			my='50px'	
		>
			<Section
				bg='white'
				width={['90%', '90%', '50%']}
				height='500px'
				alignItems='center'
				boxShadow='0px 0px 25px 10px #F6F4FD'
				p='10px'
				initial={{ opacity: 0, x: '-90%' }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: '-90%' }}
			>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={loginValidation}
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
			</Section>
		</Main>
	);
}

export default Login;
