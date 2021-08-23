import React, { ReactElement } from 'react'
import { Link } from './Link'
import styles from './Project.module.scss'

type TitleProps = {
	title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
	return <h2 className={`${styles.title} title font-display text-6xl`}>{title}</h2>
}

type ProjectProps = {
	title: string
	techIcons: ReactElement[]
	description: string
	projectHref?: string
	repoHref?: string
}

export const Project: React.FC<ProjectProps> = ({
	title,
	techIcons,
	description,
	projectHref,
	repoHref,
}) => {
	return (
		<section className="flex-col my-6">
			<div>
				<Title title={title} />
				{projectHref && (
					<Link href={projectHref} className="font-display ml-10 self-end text-3xl">
						Live
					</Link>
				)}

				{repoHref && (
					<Link href={repoHref} className="font-display ml-10 self-end text-3xl">
						Repo
					</Link>
				)}
			</div>
			<div className="my-5 flex">{generateIcons(techIcons)}</div>
			<div className="text-xl mt-5">{description}</div>
		</section>
	)
}

const generateIcons = (icons: ReactElement[]) => {
	return icons.map((icon, index) => {
		const techClassName = index > 0 ? 'ml-2' : ''
		return (
			<div key={icon.props.name + index} className={techClassName}>
				{icon}
			</div>
		)
	})
}
