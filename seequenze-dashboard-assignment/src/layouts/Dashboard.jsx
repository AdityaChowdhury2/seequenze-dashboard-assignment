import Navbar from '../components/Navbar/Navbar';
import logo from '../assets/logo.png';
import shortLogo from '../assets/short-logo.png';
import { IoServer } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { TbApps } from 'react-icons/tb';
import { FaCirclePlay } from 'react-icons/fa6';
import { MdOutlineHelp } from 'react-icons/md';
import { MdFeedback } from 'react-icons/md';

import { useState } from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar/Sidebar';

const Dashboard = () => {
	const [isFullOpen, setIsFullOpen] = useState(false);
	console.log(isFullOpen);
	return (
		<div className="grid grid-cols-2 ">
			<div>
				<Sidebar>
					<SidebarItem icon={<IoServer size={24} />} text={'Projects'} active />
					<SidebarItem
						icon={<IoServer size={24} />}
						text={'My Projects'}
						color={'#c4c4c4'}
					/>
					<hr className="my-3  " />
					<SidebarItem
						icon={<IoServer size={24} />}
						text={'My Projects'}
						color={'#c4c4c4'}
					/>
					<SidebarItem
						icon={<IoServer size={24} />}
						text={'My Projects'}
						color={'#c4c4c4'}
					/>
				</Sidebar>
			</div>
			<div className="border">
				<Navbar />
			</div>
			{/* <div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* Page content here  
					<label htmlFor="my-drawer" className="btn btn-primary drawer-button">
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
						{/* Sidebar content here  
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div> */}
		</div>
	);
};

export default Dashboard;
