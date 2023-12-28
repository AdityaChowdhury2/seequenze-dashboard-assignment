import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useGetImages from '../../hooks/useGetImages';

const AddImageModal = ({ handleClose }) => {
	const { refetch } = useGetImages();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = async data => {
		const response = await axios.post('http://localhost:5000/images', data);

		if (response.data.insertId) {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				timer: 1500,
			});
			handleClose();
			refetch();
		}
	};

	return (
		<dialog id="addImage_modal" className="modal">
			<div className="modal-box">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className="form-control w-full ">
						<div className="label">
							<span className="label-text">Author Name</span>
						</div>
						<input
							type="text"
							{...register('author', {
								required: 'Required',
							})}
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
							{...register('url', {
								required: 'Required',
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
									{errors.url.message}
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
							{...register('download_url', {
								required: 'Required',
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
									{errors.url.message}
								</span>
							)
						)}
					</label>
					<div className="mt-5 flex justify-center gap-5">
						<button className="btn btn-success">Save</button>

						<button className="btn btn-error" onClick={handleClose}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</dialog>
	);
};

export default AddImageModal;

AddImageModal.propTypes = {
	handleClose: PropTypes.func,
};
