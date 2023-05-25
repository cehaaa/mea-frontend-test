import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";

const AuthLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/auth/sign-in");

		if (JSON.parse(localStorage.getItem("mea_user_info"))) {
			navigate("/courses");
		}
	}, [navigate]);

	return (
		<div className='grid grid-cols-2 min-h-screen'>
			<div className='bg-login-background bg-cover bg-bottom'>
				<div className='bg-gray-900 w-full h-full flex items-center justify-center text-center bg-opacity-40 text-white'>
					<div>
						<div className=' uppercase font-medium text-xl mb-1.5'>
							komunitas mea
						</div>
						<div>Komunitas Jago Jualan Online</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col'>
				<div className='border-b flex justify-between px-24'>
					<NavLink
						to='/auth/sign-in'
						className={({ isActive }) =>
							`h-16 flex items-center justify-center w-36 ${
								isActive
									? "text-amber-500 border-b-2 border-b-amber-500"
									: "text-gray-400"
							}`
						}>
						Masuk
					</NavLink>
					<NavLink
						to='/auth/sign-up'
						className={({ isActive }) =>
							`h-16 flex items-center justify-center w-36 ${
								isActive
									? "text-amber-500 border-b-2 border-b-amber-500"
									: "text-gray-400"
							}`
						}>
						Daftar
					</NavLink>
				</div>

				<div className='mx-auto w-8/12 pt-20 text-center'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
