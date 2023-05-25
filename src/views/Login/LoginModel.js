import { useState } from "react";

import { useNavigate } from "react-router-dom";
import useAuthService from "../../services/useAuthService";

const LoginModel = () => {
	const navigate = useNavigate();
	const { signIn } = useAuthService();

	const [signInPayload, setSignInPayload] = useState({
		email: "candidate@mail.com",
		password: "123123",
	});

	const handleSetSignInPayload = e => {
		setSignInPayload({
			...signInPayload,
			[e.target.name]: e.target.value,
		});
	};

	const handleSignIn = async e => {
		e.preventDefault();

		try {
			const response = await signIn(signInPayload);
			const data = await response.json();

			if (data.message === "Success." && data.status === 200) {
				localStorage.setItem("mea_user_info", JSON.stringify(data.data));

				navigate("/courses");
			}

			if (data.message === "Error!" && data.status === 400) {
				alert("Pastikan data yang anda masukkan benar!");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return {
		signInPayload,

		handleSetSignInPayload,
		handleSignIn,
	};
};

export default LoginModel;
