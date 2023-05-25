import BASE_URL from "./api";

const useGetMyCourseService = () => {
	const userId = JSON.parse(localStorage.getItem("mea_user_info")).user_id;

	function getCourses() {
		return fetch(`${BASE_URL}/user/${userId}/courses/active`, {
			method: "GET",

			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
			},

			credentials: "include",
		});
	}

	return { getCourses };
};

export default useGetMyCourseService;
