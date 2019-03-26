import axios from 'axios';

export const PixelateImage = (image64) => {
	return axios.post(`http://127.0.0.1:4000/api/Pixelates/pixelate`, {image64: image64, pixelSize: 20, area: undefined})
	.then((response) => {
		return response.data;
	})
};