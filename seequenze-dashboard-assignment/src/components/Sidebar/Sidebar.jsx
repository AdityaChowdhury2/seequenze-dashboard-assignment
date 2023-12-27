import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import logo1 from '../../assets/logo.png';
import logo2 from '../../assets/short-logo.png';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import { MdOutlineHelp } from 'react-icons/md';
import { MdFeedback } from 'react-icons/md';

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
	const [expanded, setExpanded] = useState(true);
	useEffect(() => {
		const handleResize = () => {
			setExpanded(window.innerWidth >= 992);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const logo = expanded ? logo1 : logo2;
	const sidebarWidth = expanded ? 'w-[150px] md:w-[300px]' : 'lg:w-[75px] ';
	const logoWidth = expanded ? 'w-20 md:w-28' : 'w-10';
	const collapseIcon = expanded ? (
		<TbLayoutSidebarLeftCollapseFilled size={24} />
	) : (
		<TbLayoutSidebarRightCollapseFilled size={24} />
	);

	return (
		<aside
			className={`h-screen ${sidebarWidth} transition-width duration-700 bg-base-100 `}
		>
			<nav className="shadow-sm flex flex-col justify-between h-full">
				<SidebarContext.Provider value={expanded}>
					<div>
						<div className="p-4 pb-2 flex justify-between items-center">
							<img
								src={logo}
								alt=""
								className={`${logoWidth} transition-transform h-[40px]`}
							/>
						</div>
						<ul className="flex-1 px-3">{children}</ul>
					</div>
					<ul className="px-3  [&>*:last-child]:hidden md:[&>*:last-child]:flex">
						<SidebarItem
							onClick={() => setExpanded(!expanded)}
							text={'Help'}
							icon={<MdFeedback size={24} />}
						/>
						<SidebarItem
							onClick={() => setExpanded(!expanded)}
							text={'Feedback'}
							icon={<MdOutlineHelp size={24} />}
						/>
						<SidebarItem
							onClick={() => setExpanded(!expanded)}
							text={'Collapse'}
							icon={collapseIcon}
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
	const expandedWidth = expanded ? 'w-52' : 'w-52 hidden';
	const hiddenStyles =
		'absolute left-full w-24 rounded-md px-2 py-1 ml-6 bg-[#fecfaa] text-[#FA782F] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50 ';

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
			<span className={`transition-all ${expandedWidth} text-sm md:text-base`}>
				{text}
			</span>
			{!expanded && <div className={hiddenStyles}>{text}</div>}
		</li>
	);
}

Sidebar.propTypes = {
	children: PropTypes.node,
};

SidebarItem.propTypes = {
	icon: PropTypes.node,
	text: PropTypes.string,
	active: PropTypes.bool,
	color: PropTypes.string,
};
