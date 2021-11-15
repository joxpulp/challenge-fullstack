import * as Yup from 'yup';

const mimeType = ['image/png', 'image/jpeg', 'image/jpg'];

export const loginValidation = Yup.object({
	email: Yup.string()
		.email('The email address is invalid, try again')
		.required('Required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Required'),
});

export const signupValidation = Yup.object({
	email: Yup.string()
		.email('The email address is invalid, try again')
		.required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be 8 mininum characters')
		.required('Password is required'),
	name: Yup.string()
		.min(3, 'Name must be at least 3 characters')
		.required('Name is Required'),
	lastname: Yup.string()
		.min(3, 'Lastname must be at least 3 characters')
		.required('Lastname is Required'),
	age: Yup.number()
		.min(16, 'You must have 16 years old or more to register')
		.required('Age is required'),
	cardId: Yup.string()
		.matches(/^\d{8}$/, 'Card Id must be 8 digits only')
		.required('Card Id (DNI) is required'),
	address: Yup.string()
		.min(10, 'Address must have 10 characters or more')
		.required('Address is required'),
});

export const editProfileValidation = Yup.object({
	name: Yup.string().min(3, 'Name must be at least 3 characters'),
	lastname: Yup.string().min(3, 'Lastname must be at least 3 characters'),
	password: Yup.string().min(8, 'Password must be at least 8 characters'),
	age: Yup.number().min(16, 'Your age must be 16 or more'),
	cardId: Yup.string().matches(/^\d{8}$/, 'DNI must be 8 digits only'),
	address: Yup.string().min(10, 'Address must at least 10 characters'),
	avatar: Yup.mixed()
		.nullable()
		.test(
			'fileType',
			'File type not supported only .png .jpg .jpeg',
			(value) => !value || (value && mimeType.includes(value.type))
		),
});

export const addProductValidation = Yup.object({
	name: Yup.string()
		.min(3, 'Product name must be at least 3 characters')
		.required('Product name is required'),
	description: Yup.string()
		.min(20, 'Product description must be at least 20 characters')
		.required('Product description is required'),
	category: Yup.string()
		.min(4, 'Product category must be at least 4 characters')
		.required('Product category is required'),
	price: Yup.number()
		.min(10, 'Min price is 10')
		.max(30000, 'Max price is 30000')
		.required('Product price is required'),
	thumbnail: Yup.mixed()
		.nullable()
		.required('Thumbnail image is required')
		.test(
			'fileType',
			'File type not supported only .png .jpg .jpeg',
			(value) => value && mimeType.includes(value.type)
		),
});

export const editProductValidation = Yup.object({
	name: Yup.string().min(3, 'Product name must be at least 3 characters'),
	description: Yup.string().min(
		20,
		'Product description must be at least 20 characters'
	),
	category: Yup.string().min(4, 'Product category be at least 4 characters'),
	price: Yup.number()
		.min(10, 'Min price is 10')
		.max(30000, 'Max price is 30000'),
	thumbnail: Yup.mixed()
		.nullable()
		.test(
			'fileType',
			'File type not supported only .png .jpg .jpeg',
			(value) => !value || (value && mimeType.includes(value.type))
		),
});
