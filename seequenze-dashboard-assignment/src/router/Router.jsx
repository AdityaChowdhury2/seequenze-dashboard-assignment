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
			},
		],
	},
]);

export default router;
