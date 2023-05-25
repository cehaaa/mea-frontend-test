import React from "react";

const AppTextField = ({ name, placeholder, value, onChange }) => {
	return (
		<input
			type='text'
			className='border rounded py-3 px-5 placeholder:text-sm outline-none focus:border-blue-300 duration-200'
			autoComplete='off'
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default AppTextField;
