import axios from 'axios';

export const PixelateImage = (image64, pixelSize, imageSettings) => {
	return axios.post(`Pixelates/pixelate`, {image64: image64, pixelSize: pixelSize, area: imageSettings})
	.then((response) => {
		return response.data;
	});
};