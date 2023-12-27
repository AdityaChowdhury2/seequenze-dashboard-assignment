import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';
import Images from '../components/Images/Images';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		children: [
			{
				path: '/',
				element: <Images />,
				loader: async () => {
					const response = await fetch('http://localhost:5000/images');
					return await response.json();
				},
			},
		],
	},
]);

export default router;
