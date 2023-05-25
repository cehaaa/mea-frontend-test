import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";

const Root = () => {
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		const ls = localStorage.getItem("mea_user_info");
		const userInfoLs = JSON.parse(ls);

		if (userInfoLs) {
			setUserInfo(userInfoLs);
		} else navigate("/auth");
	}, [navigate]);

	return (
		<>
			{userInfo && <Header />}

			<Outlet />
		</>
	);
};

export default Root;
