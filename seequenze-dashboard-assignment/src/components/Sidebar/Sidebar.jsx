import { createContext, useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import shortLogo from '../../assets/short-logo.png';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
	const [expanded, setExpanded] = useState(true);
	useEffect(() => {
		// Function to check window width and update state
		const checkWindowWidth = () => {
			setExpanded(window.innerWidth >= 992);
		};

		// Call the function initially
		checkWindowWidth();

		// Add a listener for window resize events
		window.addEventListener('resize', checkWindowWidth);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('resize', checkWindowWidth);
		};
	}, []);
	return (
		<aside
			className={`h-screen ${
				expanded ? 'w-[300px]' : 'w-[75px]'
			} transition-opacity duration-700`}
		>
			<nav className="border-r shadow-sm flex flex-col justify-between h-full">
				<SidebarContext.Provider value={expanded}>
					<div>
						<div className="p-4 pb-2 flex justify-between items-center">
							<img
								src={expanded ? logo : shortLogo}
								alt=""
								className={`${
									expanded ? 'w-28' : 'w-10'
								} transition-transform h-[40px]`}
							/>
						</div>
						<ul className="flex-1 px-3">{children}</ul>
					</div>
					<ul className="px-3">
						<SidebarItem
							onClick={() => setExpanded(!expanded)}
							text={'Collapse'}
							icon={
								expanded ? (
									<TbLayoutSidebarLeftCollapseFilled size={20} />
								) : (
									<TbLayoutSidebarRightCollapseFilled size={20} />
								)
							}
						/>
					</ul>
				</SidebarContext.Provider>
			</nav>
		</aside>
	);
};

export default Sidebar;

export function SidebarItem(props) {
	const { icon, text, active, color, ...rest } = props;
	const expanded = useContext(SidebarContext);

	return (
		<li
			{...rest}
			className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors gap-3 group ${
				active
					? color
						? `text-[${color}]`
						: 'text-[#FA782F]'
					: `text-[${color}]`
			}`}
		>
			{icon}
			<span className={`transition-all ${expanded ? 'w-52 ' : 'w-52 hidden'} `}>
				{text}
			</span>
			{!expanded && (
				<div
					className={`absolute left-full 
                   w-24
                    rounded-md px-2  py-1 ml-6 bg-[#fecfaa] text-[#FA782F] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100  group-hover:translate-x-0 `}
				>
					{text}
				</div>
			)}
		</li>
	);
}
