import React from 'react'
import classnames from 'classnames'

type IconProps = {
	name: string
	className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
	const componentClasses = classnames([`devicon-${name}`, 'text-3xl', className])

	return <i className={componentClasses}></i>
}
