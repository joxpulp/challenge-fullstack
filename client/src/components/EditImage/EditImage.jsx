import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Image } from '../Image/Image';
import cancel from '../../services/svg/cancel.svg';

function EditImage({ currentImage, file, label, onCancel }) {
	const [previewImage, setPreviewImage] = useState(null);

	const reader = new FileReader();
	file && reader.readAsDataURL(file);
	reader.onload = () => {
		file && setPreviewImage(reader.result);
	};

	const handleOnCancel = () => {
		setPreviewImage(null);
		onCancel();
	};

	return (
		<Box position='relative' >
			{file && (
				<Image
					position='absolute'
                    cursor='pointer'
					m='10px'
					right='0'
					width='30px'
					src={cancel}
					onClick={handleOnCancel}
					zIndex='2'
				/>
			)}
			<label htmlFor={label}>
				<Image
					cursor='pointer'
					width='150px'
					m='10px'
					src={previewImage ? previewImage : currentImage}
				/>
			</label>
		</Box>
	);
}

export default EditImage;
