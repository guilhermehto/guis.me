import React from 'react'

export enum Alignment {
	Left,
	Right,
}

type SectionProps = {
	alignment: Alignment
	title: string
	id?: string
}

export const Section: React.FC<SectionProps> = ({
	alignment = Alignment.Left,
	title,
	children,
	id,
}) => {
	return (
		<section className="w-screen flex max-w-full my-12 justify-between" id={id}>
			{alignment == Alignment.Left && <Title title={title} />}
			<div className="my-auto w-3/4">{children}</div>
			{alignment == Alignment.Right && <Title title={title} />}
		</section>
	)
}

type TitleProps = {
	title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<div className="text-secondary font-display text-9xl section-text mr-10 my-auto">
			{title}
		</div>
	)
}
