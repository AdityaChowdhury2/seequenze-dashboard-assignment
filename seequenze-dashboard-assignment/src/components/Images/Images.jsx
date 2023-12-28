import { FaPlus } from 'react-icons/fa6';
import AddImageModal from '../modals/AddImageModal';
import SkeletonCard from '../SkeletonCard';
import ImageCard from './ImageCard';
import useGetImages from '../../hooks/useGetImages';

const Images = () => {
	// Use The useGetImages hook to fetch images
	const { allImages, isLoading, isError } = useGetImages();

	// function to handle add Image modal open
	const handleOpen = () =>
		document.getElementById('addImage_modal').showModal();

	// function to handle add Image modal close
	const handleClose = () => document.getElementById('addImage_modal').close();

	return (
		<div className="px-4 py-4 md:ml-8 max-h-[calc(100vh-68px)] overflow-auto">
			{/* Button to open the modal */}
			<button
				onClick={handleOpen}
				className="btn bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] text-orange-100"
			>
				Add Images <FaPlus />
			</button>

			{/* Modal component */}
			<AddImageModal handleClose={handleClose} />

			{/* Heading */}
			<h2 className="my-5"> All Images </h2>

			{/* Grid to display images */}
			<div
				className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-10 h-full`}
			>
				{/* Loading skeleton cards */}
				{isLoading ? (
					<>
						{[...Array(6).keys()].map(key => (
							<SkeletonCard key={key} />
						))}
					</>
				) : isError || allImages?.errno ? (
					// Check for error or empty data
					<>No Data Found</>
				) : (
					// Display image cards
					<>
						{allImages?.map(image => (
							<ImageCard key={image.id} image={image} />
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Images;
