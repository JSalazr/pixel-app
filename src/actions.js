import axios from 'axios';

export const GetTestMethod = () => {
	axios.get(`http://192.168.0.108:4000/api/Pixelates/test`)
	.then((response) => {
		console.log(response.data);
	})
};