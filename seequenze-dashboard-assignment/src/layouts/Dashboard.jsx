import Navbar from '../components/Navbar/Navbar';
import Sidebar, { SidebarItem } from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { IoServer } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { TbApps } from 'react-icons/tb';
import { FaCirclePlay } from 'react-icons/fa6';

const Dashboard = () => {
	return (
		<div className="flex">
			<Sidebar>
				<SidebarItem icon={<IoServer size={24} />} text={'Projects'} active />

				<SidebarItem
					icon={<GrProjects size={20} />}
					text={'Sample'}
					color={'#c4c4c4'}
				/>
				<hr className="my-3  " />
				<SidebarItem
					icon={<TbApps size={24} />}
					text={'Apps'}
					color={'#c4c4c4'}
				/>
				<SidebarItem
					icon={<FaCirclePlay size={24} />}
					text={'Intro'}
					color={'#c4c4c4'}
				/>
			</Sidebar>
			<div className="flex-1">
				<Navbar />
				<div className="overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
