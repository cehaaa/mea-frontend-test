import BASE_URL from "./api";

const useCourseDetailService = () => {
	function getCourseDetail({ courseId, userId }) {
		return fetch(`${BASE_URL}/course?course_id=${courseId}&user_id=${userId}`, {
			method: "GET",
			credentials: "include",
		});
	}
	return {
		getCourseDetail,
	};
};

export default useCourseDetailService;
