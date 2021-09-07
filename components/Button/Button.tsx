import React from 'react'
import classnames from 'classnames'

import styles from './Button.module.scss'

type ButtonProps = {
	type?: 'button' | 'reset' | 'submit'
	color?: 'primary' | 'secondary'
	dropShadowSide?: 'left' | 'right'
	className?: string
	onClick: VoidFunction
}

export const Button: React.FC<ButtonProps> = (props) => {
	const buttonClasses = classnames([
		styles.button,
		'font-display',
		'text-5xl',
		props.dropShadowSide === 'right' ? styles['right-shadow'] : styles['left-shadow'],
		props.className,
		props.color || 'primary',
	])

	return (
		<button className={buttonClasses} type={props.type || 'button'}>
			{props.children}
		</button>
	)
}
