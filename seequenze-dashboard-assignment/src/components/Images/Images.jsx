import { FaPlus } from 'react-icons/fa6';
import AddImageModal from '../modals/AddImageModal';

import SkeletonCard from '../SkeletonCard';
import ImageCard from './ImageCard';
import useGetImages from '../../hooks/useGetImages';

const Images = () => {
	const { allImages, isLoading, isError } = useGetImages();
	const handleClose = () => document.getElementById('addImage_modal').close();

	return (
		<div className="px-4 py-4 md:ml-8  max-h-[calc(100vh-68px)] overflow-auto">
			<button
				onClick={() => {
					document.getElementById('addImage_modal').showModal();
				}}
				className="btn bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] text-orange-100"
			>
				Add Images <FaPlus />
			</button>
			<AddImageModal handleClose={handleClose} />
			<h2 className="my-5"> All Images </h2>
			<div
				className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 lg:gap-10 h-full`}
			>
				{isLoading ? (
					<>
						{[...Array(6).keys()].map(key => (
							<SkeletonCard key={key} />
						))}
					</>
				) : isError || allImages?.errno ? (
					<>No Data Found</>
				) : (
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
