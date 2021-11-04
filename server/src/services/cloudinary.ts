import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { CloudinaryOptions } from '../models/interfaces';
import multer from 'multer';
import { CONFIG } from '../config/config';

cloudinary.config({
	cloud_name: CONFIG.CLOUD_NAME,
	api_key: CONFIG.API_KEY,
	api_secret: CONFIG.API_SECRET,
});

const storageAvatar: CloudinaryOptions = {
	cloudinary: cloudinary,
	params: {
		folder: 'AVATARS',
	},
};

const storageProduct: CloudinaryOptions = {
	cloudinary: cloudinary,
	params: {
		folder: 'PRODUCTS',
	},
};

const whitelist = ['image/png', 'image/jpeg'];

export const uploadAvatar = multer({ storage: new CloudinaryStorage(storageAvatar) });
export const uploadProduct = multer({
	storage: new CloudinaryStorage(storageProduct),
	fileFilter: (req, file, cb) => {
		if (!whitelist.includes(file.mimetype)) {
			return cb(null, false);
		}

		cb(null, true);
	},
});

export default cloudinary