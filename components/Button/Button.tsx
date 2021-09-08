import React from 'react'
import classnames from 'classnames'

import styles from './Button.module.scss'

type ButtonProps = {
	type?: 'button' | 'reset' | 'submit'
	color?: 'primary' | 'secondary'
	dropShadowSide?: 'left' | 'right' | 'center'
	className?: string
	onClick: VoidFunction
}

export const Button: React.FC<ButtonProps> = ({
	children,
	type = 'button',
	color,
	dropShadowSide = 'left',
	className,
	onClick,
}) => {
	const buttonClasses = classnames([
		styles.button,
		'font-display',
		'text-5xl',
		styles[`${dropShadowSide}-shadow`],
		className,
		color || 'primary',
	])

	return (
		<button className={buttonClasses} type={type} onClick={onClick}>
			{children}
		</button>
	)
}
