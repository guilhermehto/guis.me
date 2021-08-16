import React from 'react'

export enum Alignment {
	Left,
	Right,
}

type SectionProps = {
	alignment: Alignment
	title: string
}

export const Section: React.FC<SectionProps> = ({
	alignment = Alignment.Left,
	title,
	children,
}) => {
	return (
		<section className="w-screen flex max-w-full my-12 justify-between">
			{alignment == Alignment.Left && <Title title={title} />}
			{children}
			{alignment == Alignment.Right && <Title title={title} />}
		</section>
	)
}

type TitleProps = {
	title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
	return <div className="text-secondary font-display text-9xl section-text mr-10">{title}</div>
}
