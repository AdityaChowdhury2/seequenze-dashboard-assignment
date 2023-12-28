import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import DetailsModal from '../modals/DetailsModal';
import EditModal from '../modals/EditModal';
import axios from 'axios';
import Swal from 'sweetalert2';
import useGetImages from '../../hooks/useGetImages';

const ImageCard = ({ image }) => {
	const { refetch } = useGetImages();
	const handleDetailModalClose = id => {
		document.getElementById(`image-${id}`).close();
	};

	const handleEditModalClose = id => {
		document.getElementById(`image-edit-${id}`).close();
	};

	const deleteImage = id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				axios.delete(`${import.meta.env.VITE_SERVER_URL}/images/${id}`);
				Swal.fire({
					title: 'Deleted!',
					text: 'Your file has been deleted.',
					icon: 'success',
				});
				refetch();
			}
		});
	};

	return (
		<div key={image.id} className="card bg-base-100 shadow-xl">
			<img
				className="object-cover w-full h-48 rounded-t-lg cursor-pointer"
				src={image.download_url}
				alt={image.author}
				onClick={() => document.getElementById(`image-${image.id}`).showModal()}
			/>
			<DetailsModal
				key={`image-${image.id}`}
				image={image}
				handleClose={handleDetailModalClose}
			/>
			<div className="card-body">
				<h2 className="card-title">{image.author}</h2>
				<div className="flex gap-4">
					<button
						onClick={() =>
							document.getElementById(`image-edit-${image.id}`).showModal()
						}
						className="text-orange-50 bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] p-2 rounded-lg"
					>
						<FaEdit />
					</button>
					<EditModal image={image} handleClose={handleEditModalClose} />
					<button
						onClick={() => deleteImage(image.id)}
						className="text-red-50bg-red-600 ac bg-red-600 hover:bg-red-700  p-2 rounded-lg"
					>
						<MdDelete />
					</button>
				</div>
			</div>
		</div>
	);
};

ImageCard.propTypes = {
	image: PropTypes.object,
};
export default ImageCard;
