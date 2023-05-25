import LoginModel from "./LoginModel";
import LoginView from "./LoginView";

const Login = () => {
	const model = LoginModel();

	return <LoginView {...model} />;
};

export default Login;
