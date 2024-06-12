export const loginUser = async (email: string, password: string) => {
	const response = await fetch('https://stemprotocol.codefremics.com/api/v2/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username: email, password: password }),
	});

	const data = await response.json();

	if (response.ok) {
		sessionStorage.setItem('access_token', data.access_token);
		sessionStorage.setItem('user', JSON.stringify({ firstName: data.firstName, lastName: data.lastName }));
		return { success: true };
	} else {
		return { success: false, message: data.message };
	}
};

export const logoutUser = () => {
	sessionStorage.removeItem('access_token');
	sessionStorage.removeItem('user');
};
