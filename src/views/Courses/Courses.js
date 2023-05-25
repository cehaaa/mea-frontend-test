import React, { useCallback, useEffect, useState } from "react";

import useGetMyCourseService from "../../services/useGetMyCourseService";

import Container from "../../components/Container/Container";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";

const Courses = () => {
	const { getCourses } = useGetMyCourseService();

	const [courses, setCourses] = useState([]);

	const fetchMyCourses = async () => {
		try {
			const response = await getCourses();
			const data = await response.json();

			if (data.message === "Success." && data.status === 200) {
				setCourses(data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// fetchMyCoursesCallback();

		fetchMyCourses();
	}, []);

	return (
		<>
			<Container className='py-5'>
				<div>
					<div className='text-xl font-medium'>Kelas ({courses.length}) </div>

					<div className='mt-5'>
						<CoursesList courses={courses} />
					</div>
				</div>
			</Container>
		</>
	);
};

export default Courses;
