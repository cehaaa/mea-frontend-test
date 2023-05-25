import React from "react";

import { useNavigate, Link } from "react-router-dom";

import Container from "./../Container/Container";

const Header = () => {
	const name = JSON.parse(localStorage.getItem("mea_user_info")).name;

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("mea_user_info");

		navigate("/auth/sign-in");
	};

	return (
		<header className='py-6 sticky top-0 border-b border-gray-200 bg-white shadow-sm text-sm'>
			<Container className='flex items-center justify-between'>
				<Link to='/courses' className='text-2xl font-semibold'>
					Course
				</Link>

				<div className='flex items-center'>
					<div className='flex items-center mr-5'>
						<div className='bg-blue-500 h-9 w-9 rounded-full mr-2'></div>
						<div className='font-medium'>Halo, {name}</div>
					</div>
				</div>

				<button
					className='hover:text-rose-500 duration-200'
					onClick={handleLogout}>
					Logout
				</button>
			</Container>
		</header>
	);
};

export default Header;
