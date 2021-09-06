import { Link } from './Link'

export const Navbar = () => {
	return (
		<div className="flex px-5 font-display lg:text-4xl md:text-3xl sm:text-2xl">
			<ul className="flex">
				<li className="ml-20">
					<Link href="#about-me">About me</Link>
				</li>

				<li className="ml-20">
					<Link href="#projects">Projects</Link>
				</li>
				<li className="ml-20">
					<Link href="#">Contact</Link>
				</li>
				<li className="ml-20">
					<Link href="#">Resume</Link>
				</li>
			</ul>
		</div>
	)
}
