import { useState } from "react";

const AppPasswordField = ({ name, placeholder, value, onChange }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='flex items-center border rounded py-3 px-5 justify-between text-sm focus:border-blue-300'>
			<input
				type={showPassword ? "text" : "password"}
				className='placeholder:text-sm outline-none  duration-200 w-full mr-5'
				autoComplete='off'
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>

			<div
				className='text-amber-500 hover:text-amber-600 duration-200 cursor-pointer'
				onClick={() => setShowPassword(!showPassword)}>
				{showPassword ? "Hide" : "Show"}
			</div>
		</div>
	);
};

export default AppPasswordField;
