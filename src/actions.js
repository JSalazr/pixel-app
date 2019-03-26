import axios from 'axios';

export const PixelateImage = (image64, pixelSize) => {
	return axios.post(`Pixelates/pixelate`, {image64: image64, pixelSize: pixelSize, area: undefined})
	.then((response) => {
		return response.data;
	})
};