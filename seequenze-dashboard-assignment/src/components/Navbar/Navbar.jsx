import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../../assets/logo.png';

const Navbar = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className="navbar  bg-base-100">
			<div className="flex-1">
				{/* <a href="/">
					<img src={logo} alt="" className="w-24" />
				</a> */}
			</div>
			<div className="flex-none">
				<div className="relative">
					<div
						tabIndex={0}
						onClick={() => setIsShow(!isShow)}
						role="button"
						className="flex  items-center"
					>
						<div className="w-10 rounded-full gap-10">
							<img
								alt="Tailwind CSS Navbar component"
								className="mask mask-circle inline-block"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
						<IoMdArrowDropdown size={24} />
					</div>
					{isShow ? (
						<ul
							tabIndex={0}
							className="menu menu-sm absolute mt-3 z-[1] p-2 shadow right-4 bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
