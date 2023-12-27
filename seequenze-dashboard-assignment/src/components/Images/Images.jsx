import { useLoaderData } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';
import AddImageModal from '../modals/AddImageModal';
// import { useEffect, useState } from 'react';

const Images = () => {
	const allImages = useLoaderData();
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
				{allImages.map(image => (
					<div key={image.id} className="card bg-base-100 shadow-xl">
						<img
							className="object-cover w-full h-48 rounded-t-lg"
							src={image.download_url}
							alt={image.author}
						/>

						<div className="card-body">
							<h2 className="card-title">{image.author}</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Images;
