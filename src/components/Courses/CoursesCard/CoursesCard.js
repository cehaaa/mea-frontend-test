import React from "react";

import { useNavigate } from "react-router-dom";

import AppButton from "../../Atoms/AppButton/AppButton";

const CoursesCard = ({ number, course }) => {
	const navigate = useNavigate();

	const navigateToCourseDetailPage = () => {
		const userId = JSON.parse(localStorage.getItem("mea_user_info")).user_id;

		navigate(`/course-detail/${userId}/${course.course_id}`);
	};

	return (
		<div className='flex flex-col gap-y-3 border rounded-md overflow-hidden'>
			{/* image */}
			<div className='h-40 overflow-hidden border-b relative'>
				<div className='absolute flex top-2 left-2 items-center'>
					<div className='rounded-full text-xs bg-amber-500 z-10 h-7 w-7 font-medium text-white mr-2 flex items-center justify-center'>
						{number}
					</div>

					<div className='rounded text-xs bg-amber-500 z-10 py-1 px-2 font-medium text-white'>
						Premium
					</div>
				</div>

				<img
					src={course.image}
					alt='course thumbnail'
					className=' object-top object-cover h-full w-full hover:scale-110 duration-200'
				/>
			</div>

			{/* body */}
			<div className='px-2.5'>
				<div className='text font-medium cursor-pointer hover:underline underline-offset-1'>
					{course.title}
				</div>

				{/* instructors */}
				<div className='flex items-center mt-3'>
					<div className='h-10 w-10 rounded-full overflow-hidden mr-2 border border-gray-300'>
						<img src={course.instructors[0].photo} alt='instructor' />
					</div>
					<div className='text-sm '>
						<div className='font-medium'>{course.instructors[0].name}</div>
						<div className='text-gray-400 text-xs'>
							{course.instructor_role}
						</div>
					</div>
				</div>
			</div>

			{/* footer */}
			<div className='p-2.5'>
				<AppButton className='w-full' onClick={navigateToCourseDetailPage}>
					Lanjut
				</AppButton>
			</div>
		</div>
	);
};

export default CoursesCard;
