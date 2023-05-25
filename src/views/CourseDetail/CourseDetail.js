import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import useCourseDetailService from "../../services/useCourseDetailService";

import Container from "../../components/Container/Container";
import AppButton from "../../components/Atoms/AppButton/AppButton";

const CourseDetail = () => {
	const { userId, courseId } = useParams();

	const { getCourseDetail } = useCourseDetailService();

	const [isLoading, setIsLoading] = useState(true);

	const [courseDetail, setCourseDetail] = useState([]);
	const [currentChapter, setCurrentChapter] = useState(0);

	const fetchCourseDetail = async () => {
		try {
			setIsLoading(true);

			const response = await getCourseDetail({ courseId, userId });

			const data = await response.json();

			if (data.message === "Success." && data.status === 200) {
				setCourseDetail(data.data);
			}

			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChangeChapter = action => {
		if (
			(currentChapter === 0 && action === "prev") ||
			(currentChapter === courseDetail.chapters.length - 1 && action === "next")
		)
			return;

		if (action === "next") {
			setCurrentChapter(currentChapter + 1);
		} else if (action === "prev") {
			setCurrentChapter(currentChapter - 1);
		}
	};

	useEffect(() => {
		fetchCourseDetail();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Container className='py-5'>
				<div className='flex flex-col space-y-5'>
					<div className='text-lg font-medium hover:underline underline-offset-2 cursor-pointer'>
						{currentChapter + 1}. {courseDetail.chapters[currentChapter].title}
					</div>

					<div className='w-full bg-blue-500 h-[500px] flex items-center justify-center'>
						<div className='text-white font-semibold text-2xl'>
							Video Player
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<AppButton onClick={() => handleChangeChapter("prev")}>
							Sebelumnya
						</AppButton>
						<AppButton onClick={() => handleChangeChapter("next")}>
							Selanjutnya
						</AppButton>
					</div>
				</div>
			</Container>
		</>
	);
};

const Loading = () => {
	return <div>Loading...</div>;
};

export default CourseDetail;
