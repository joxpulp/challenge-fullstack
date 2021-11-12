import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useField } from 'formik';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { TextareaBase } from '../Textarea/TexareaBase/TextareaBase';

function EditInput({ onCancel, currentValue, width, ...props }) {
	const [field, meta] = useField(props);
	const [edit, setEdit] = useState(false);

	const { userData } = useSelector((state) => state.auth);

	const handleClick = () => {
		setEdit(!edit);
		onCancel();
	};

	useEffect(() => {
		setEdit(false);
	}, [userData]);

	return (
		<Box flexDirection='column' m='5px'>
			<Box mb='5px'>
				{edit ? (
					<TextareaBase width={width ? width : '80%'} {...field} {...props} />
				) : (
					<Box
						p='10px'
						cursor='pointer'
						onClick={handleClick}
						alignItems='center'
						justifyContent='center'
						width={width ? width : '80%'}
						borderBottom='1px solid #C2C5E1'
					>
						<Text fontSize='13px' color='#9b9b9b'>{currentValue}</Text>
					</Box>
				)}
				<Button ml='10px' width='30px' onClick={handleClick} type='button'>
					{edit ? 'Cancel' : 'Edit'}
				</Button>
			</Box>
			{meta.touched && meta.error && <Text color='red'>{meta.error}</Text>}
		</Box>
	);
}

export default EditInput;
