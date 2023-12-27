import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1"></div>
			<div className="flex-none md:pr-4">
				<div className="relative">
					<div
						tabIndex={0}
						onClick={() => setIsShow(!isShow)}
						role="button"
						className="flex items-center gap-4"
					>
						<div className="flex flex-col">
							<p className="text-lg font-semibold">
								Free Trail |{' '}
								<span className="text-base font-normal">2 days left</span>
							</p>
							<p className="text-[#FA782F] text-sm">Extend Free trail</p>
						</div>
						<div className="flex items-center">
							<div className="w-10 rounded-full flex gap-10">
								<img
									alt="Tailwind CSS Navbar component"
									className="mask mask-circle inline-block"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								/>
							</div>
							<IoMdArrowDropdown size={24} />
						</div>
					</div>
					{isShow ? (
						<ul
							tabIndex={0}
							className="menu menu-sm absolute mt-3 z-[1] p-2 shadow right-4 bg-base-100 rounded-box w-52 "
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
