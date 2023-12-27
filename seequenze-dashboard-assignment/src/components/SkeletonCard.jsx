import Skeleton from 'react-loading-skeleton';
const SkeletonCard = () => {
	return (
		<div className="card shadow-xl">
			<Skeleton borderRadius={'20px 20px 0 0'} width={'100%'} height={192} />
			<div className="card-body">
				<Skeleton />
			</div>
		</div>
	);
};

export default SkeletonCard;
