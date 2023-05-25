import BASE_URL from "./api";

const useAuthService = () => {
	function signIn(payload) {
		return fetch(`${BASE_URL}/login`, {
			method: "POST",
			credentials: "include",

			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
			},

			body: new URLSearchParams(payload),
		});
	}

	function signUp() {}

	return { signIn, signUp };
};

export default useAuthService;
