import AppTextField from "../../components/Atoms/AppTextField/AppTextField";
import AppPasswordField from "../../components/Atoms/AppPasswordField/AppPasswordField";
import AppButton from "../../components/Atoms/AppButton/AppButton";

const LoginView = ({ signInPayload, handleSetSignInPayload, handleSignIn }) => {
	return (
		// <div className='grid grid-cols-2 min-h-screen'>
		// 	<div className='bg-login-background bg-cover bg-bottom'>
		// 		<div className='bg-gray-900 w-full h-full flex items-center justify-center text-center bg-opacity-40 text-white'>
		// 			<div>
		// 				<div className=' uppercase font-medium text-xl mb-1.5'>
		// 					komunitas mea
		// 				</div>
		// 				<div>Komunitas Jago Jualan Online</div>
		// 			</div>
		// 		</div>
		// 	</div>

		// </div>

		<>
			<div className='text-gray-500'>
				Silahkan masuk ke akun komunitas Mea kamu
			</div>

			<form
				onSubmit={e => handleSignIn(e)}
				className='pt-10 flex flex-col space-y-5'>
				<AppTextField
					name='email'
					placeholder='Masukkan Nama Lengkap'
					value={signInPayload.email}
					onChange={e => handleSetSignInPayload(e)}
				/>

				<AppPasswordField
					name='password'
					placeholder='Masukkan Kata Sandi'
					value={signInPayload.password}
					onChange={e => handleSetSignInPayload(e)}
				/>

				<div className='text-amber-500 text-left text-sm cursor-pointer hover:text-amber-600 duration-200'>
					Lupa kata sandi
				</div>

				<AppButton type='submit'>Masuk</AppButton>
			</form>
		</>
	);
};

export default LoginView;
