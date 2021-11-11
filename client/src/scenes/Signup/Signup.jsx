import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../reducers/auth/authReducer';
import { clearErrorMsg, clearSuccessMsg } from '../../reducers/ui/uiReducer';
import { Form, Formik } from 'formik';
import { signupValidation } from '../../helpers/yup';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Box } from '../../components/Box/Box';
import { Title } from '../../components/Title/Title';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Signup() {

	const history = useHistory();

	const dispatch = useDispatch();
	const { errorMsg, successMsg } = useSelector((state) => state.ui);

	return (
		<Main alignItems='center' justifyContent='center' width='100%' my='50px'>
			<Section
				bg='white'
				overflow='hidden'
				width={['90%', '90%', '50%']}
				height='850px'
				alignItems='center'
				boxShadow='0px 0px 25px 10px #F6F4FD'
				p='10px'
				initial={{ opacity: 0, x: '80%' }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: '80%' }}
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
						<Box alignItems='center'>
							<Button bg='black' color='white' mr='10px' type='submit'>
								Signup
							</Button>
							<Button onClick={() => history.push('/login')}   type='button'>
								Go Back
							</Button>
						</Box>
					</Form>
				</Formik>
			</Section>
		</Main>
	);
}

export default Signup;
