import { Navbar } from '../components/Navbar'
import { Alignment, Section } from '../components/Section'

export default function Home() {
	return (
		<div className="px-10 max-w-screen-xl  mx-auto">
			<div className="font-display relative">
				<div className="sm:text-6xl md:text-15xl lg:text-15xl text-secondary leading-none">
					GUILHERME OLIVEIRA
				</div>
				<div className="md:text-6xl lg:text-8xl absolute inset-y-1/4 pl-24 w-9/12">
					Software developer with a <span className="text-primary">passion</span> for
					front-end.
				</div>
			</div>
			<Navbar />

			<Section alignment={Alignment.Left} title="About me">
				<div className="text-7xl font-display my-auto w-3/4">
					With experience in fullstack projects, i’m driven by creating beautiful
					solutions that make an impact.
				</div>
			</Section>
		</div>
	)
}
