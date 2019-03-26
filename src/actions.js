import axios from 'axios';

export const PixelateImage = (image64) => {
	return axios.post(`Pixelates/pixelate`, {image64: image64, pixelSize: 20, area: undefined})
	.then((response) => {
		return response.data;
	})
};