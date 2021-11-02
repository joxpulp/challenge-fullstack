import React from 'react';
import { useField } from 'formik';
import { Box } from '../Box/Box';
import { BaseInput } from './BaseInput/Input';
import { Text } from '../Text/Text';

function Input({ label, ...props }) {
	const [field, meta] = useField(props);
	return (
		<Box flexDirection='column' width='100%' alignItems='center'>
			<BaseInput width={['60%', '60%', '30%']} my='15px'  {...field} {...props} />
			{meta.touched && meta.error && (
				<Text color='red'>
					{meta.error}
				</Text>
			)}
		</Box>
	);
}

export default Input;
