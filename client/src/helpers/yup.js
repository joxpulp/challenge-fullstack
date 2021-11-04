import * as Yup from 'yup';


export const loginValidation = Yup.object({
	email: Yup.string()
		.email('The email address is invalid, try again')
		.required('Required'),
	password: Yup.string()
		.min(8, 'Password must be 8 mininum characters')
		.required('Required'),
});

export const signupValidation = Yup.object({
	email: Yup.string()
		.email('The email address is invalid, try again')
		.required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be 8 mininum characters')
		.required('Password is required'),
	name: Yup.string().min(3, 'Minium 3 letters').required('Name is Required'),
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
});

export const editProfileValidation = Yup.object({
	password: Yup.string().min(8, 'Password must be 8 mininum characters'),
	name: Yup.string().min(3, 'Minium 3 letters'),
	lastname: Yup.string().min(3, 'Minium 3 letters'),
	age: Yup.number().min(16, 'You must have 16 or more to register'),
	cardId: Yup.string().min(8, 'Card Id must be 8 characters'),
	address: Yup.string().min(10, 'Address must have 10 characters or more'),
});