import React from "react";

const AppButton = ({ children, className, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-amber-500 text-white rounded text-sm py-2.5 font-medium hover:bg-amber-600 duration-200 min-w-fit px-4 ${className}`}>
			{children}
		</button>
	);
};

export default AppButton;
