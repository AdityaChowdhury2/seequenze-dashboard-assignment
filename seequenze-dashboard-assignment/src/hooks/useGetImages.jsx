import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const useGetImages = () => {
	const {
		data: allImages,
		isLoading,
		refetch,
		isError,
	} = useQuery({
		queryKey: ['images'],
		queryFn: async () => {
			const response = await axios(`${import.meta.env.VITE_SERVER_URL}/images`);
			return response.data;
		},
	});
	return { allImages, isLoading, refetch, isError };
};

export default useGetImages;
