import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";

const Root = () => {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!JSON.parse(localStorage.getItem("mea_user_info"))) {
	// 		// navigate("/auth");

	// 		console.log("hai");
	// 	} else navigate("/courses");
	// }, [navigate]);

	return (
		<>
			<Header />

			<Outlet />
		</>
	);
};

export default Root;
