import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useField } from 'formik';
import { Box } from '../Box/Box';
import { BaseInput } from '../Input/BaseInput/Input';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';

function EditInput({ onCancel, currentValue, ...props }) {
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
					<BaseInput width='80%' {...field} {...props} />
				) : (
					<Box
						p='10px'
						cursor='pointer'
						onClick={handleClick}
						alignItems='center'
						justifyContent='center'
						width='230px'
						borderBottom='1px solid #C2C5E1'
					>
						<Title color='#9b9b9b'>{currentValue}</Title>
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