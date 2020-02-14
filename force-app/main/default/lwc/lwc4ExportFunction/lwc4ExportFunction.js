export const validateLength = (value) => {
	if (value.trim().length < 8) {
		return false;
	}
	return true;
};
