import { Icon } from '../components/Icon'
import { Navbar } from '../components/Navbar'
import { Project } from '../components/Project'
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
				<div className="text-7xl font-display">
					With experience in fullstack projects, i’m driven by creating beautiful
					solutions that make an impact.
				</div>
			</Section>

			<Section alignment={Alignment.Right} title="Projects">
				<Project
					title="Tic tac toe"
					projectHref="https://multiplayer-tic-tac-toe-d4a70.web.app/"
					repoHref="https://github.com/guilhermehto/tic-tac-toe-client"
					description="Allow players to compete against each other in a multiplayer tic tac toe game.
					Developed using Svelte, Socket.io, and Express. Hosted on Firebase."
					techIcons={[
						'html5-plain',
						'javascript-plain',
						'nodejs-plain',
						'svelte-plain',
						'express-original',
					].map((iconName) => (
						<Icon key={iconName} name={iconName} />
					))}
				/>

				<Project
					title="Old Portfolio"
					projectHref="https://guilhermehto.dev"
					repoHref="https://github.com/guilhermehto/portfolio"
					description="My old portfolio, keeping it here as a way of keeping track how much I'm growing over the years. Made using hugo."
					techIcons={['html5-plain', 'svelte-plain', 'go-plain'].map((iconName) => (
						<Icon key={iconName} name={iconName} />
					))}
				/>
			</Section>
		</div>
	)
}
