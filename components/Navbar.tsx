export const Navbar = () => {
	return (
		<div className="flex px-5 font-display lg:text-4xl md:text-3xl sm:text-2xl">
			<ul className="flex">
				<li className="marker ml-20">
					<a href="#">About me</a>
				</li>
				<li className="marker ml-20">
					<a href="#">Projects</a>
				</li>
				<li className="marker ml-20">
					<a href="#">Contact</a>
				</li>
				<li className="marker ml-20">
					<a href="#">Resume</a>
				</li>
			</ul>
		</div>
	)
}
