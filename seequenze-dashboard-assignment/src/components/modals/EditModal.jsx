import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useGetImages from '../../hooks/useGetImages';

const EditModal = ({ image, handleClose }) => {
	const { refetch } = useGetImages();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = async data => {
		const response = await axios.patch(
			`${import.meta.env.VITE_SERVER_URL}/images/${image.id}`,
			data
		);
		console.log(response.data);
		if (response.data.changedRows) {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				timer: 1500,
			});
			refetch();
		}
		handleClose(image.id);
	};
	return (
		<dialog id={`image-edit-${image.id}`} className="modal">
			<div className="modal-box">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className="form-control w-full ">
						<div className="label">
							<span className="label-text">Author Name</span>
						</div>
						<input
							type="text"
							{...register('author', { required: true })}
							defaultValue={image.author}
							placeholder="Type here"
							className="input input-bordered w-full "
						/>
						{errors.author && (
							<span className="text-red-600 text-sm">
								This field is required
							</span>
						)}
					</label>
					<label className="form-control w-full ">
						<div className="label">
							<span className="label-text">Image Url</span>
						</div>
						<input
							type="text"
							defaultValue={image.url}
							{...register('url', {
								required: true,
								pattern: {
									value:
										/(http(s)?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
									message: 'Invalid Url',
								},
							})}
							placeholder="Type here"
							className="input input-bordered w-full "
						/>
						{errors.url?.type === 'required' ? (
							<span className="text-red-600 text-sm">
								This field is required
							</span>
						) : (
							errors.url?.type === 'pattern' && (
								<span className="text-red-600 text-sm">
									{errors.url?.message}
								</span>
							)
						)}
					</label>
					<label className="form-control w-full ">
						<div className="label">
							<span className="label-text">Download Url</span>
						</div>
						<input
							type="text"
							defaultValue={image.download_url}
							{...register('download_url', {
								required: true,
								pattern: {
									value:
										/(http(s)?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
									message: 'Invalid Url',
								},
							})}
							placeholder="Type here"
							className="input input-bordered w-full "
						/>
						{errors.download_url?.type === 'required' ? (
							<span className="text-red-600 text-sm">
								This field is required
							</span>
						) : (
							errors.download_url?.type === 'pattern' && (
								<span className="text-red-600 text-sm">
									{errors.url?.message}
								</span>
							)
						)}
					</label>
					<div className="mt-5 flex justify-center gap-5">
						<button className="btn btn-success">Save</button>

						<button
							className="btn btn-error"
							onClick={() => handleClose(image.id)}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</dialog>
	);
};

EditModal.propTypes = {
	handleClose: PropTypes.func,
	image: PropTypes.object,
};
export default EditModal;
