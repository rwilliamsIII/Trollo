import jwt_decode from 'jwt-decode';
// grab local token if stored in localstorage from login page,

const authenticate = () => {
	let tokenValid = true;
	let localToken = localStorage.getItem('trollo');

	if (localToken) {
		const decode = jwt_decode(localToken);

		const currentTime = new Date().getTime() / 1000;

		if (currentTime > decode.exp) {
			tokenValid: false;
			return tokenValid;
		}
		return null;
	}
};

export default authenticate;
