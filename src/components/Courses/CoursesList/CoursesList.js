import React from "react";

import CoursesCard from "../CoursesCard/CoursesCard";

const CoursesList = ({ courses }) => {
	return (
		<div className='grid grid-cols-3 gap-5'>
			{courses.map((course, index) => {
				return <CoursesCard key={index} course={course} number={index + 1} />;
			})}
		</div>
	);
};

export default CoursesList;
