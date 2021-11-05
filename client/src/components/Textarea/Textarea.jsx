import { useField } from 'formik';
import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { BaseTextarea } from './BaseTextarea';

function Textarea({ label, ...props }) {
	const [field, meta] = useField(props);

	return (
		<Box m='20px' flexDirection='column' width='100%' alignItems='center'>
			<BaseTextarea width={['60%', '60%', '30%']} {...field} {...props} />
			{meta.touched && meta.error && (
				<Text mt='3px' color='red'>
					{meta.error}
				</Text>
			)}
		</Box>
	);
}

export default Textarea;
