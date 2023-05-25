import Root from "../views/Root/Root";
import Courses from "../views/Courses/Courses";
import CourseDetail from "../views/CourseDetail/CourseDetail";

import Login from "../views/Login/Login";
import AuthLayout from "../views/Auth/AuthLayout";

const routes = [
	{
		path: "/auth",
		element: <AuthLayout />,

		children: [
			{
				path: "sign-in",
				element: <Login />,
			},
			{
				path: "logout",
				action: () => {
					localStorage.removeItem("token");
					window.location.href = "/auth/sign-in";
				},
			},
		],
	},

	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "courses",
				element: <Courses />,
			},
			{
				path: "course-detail/:userId/:courseId",
				element: <CourseDetail />,
			},
		],
	},
];

export default routes;
