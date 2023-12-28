import { IoExitOutline } from 'react-icons/io5';
const DetailsModal = ({ handleClose, image }) => {
	return (
		<dialog id={`image-${image.id}`} className="modal">
			<div className="modal-box">
				<h3 className="font-bold text-lg">{image.author}</h3>
				<img src={image.download_url} alt={image.author} />
				<div className="modal-action">
					<a href={image.url} target="_blank" rel="noreferrer noopener">
						<button className="btn btn-success">
							Visit <IoExitOutline />
						</button>
					</a>
					<button
						className="btn btn-error"
						onClick={() => handleClose(image.id)}
					>
						Close
					</button>
				</div>
			</div>
		</dialog>
	);
};

import PropTypes from 'prop-types';

DetailsModal.propTypes = {
	handleClose: PropTypes.func,
	image: PropTypes.object,
};

export default DetailsModal;
