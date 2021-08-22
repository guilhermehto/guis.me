import React from 'react'
import classnames from 'classnames'
import styles from './Link.module.scss'
import classNames from 'classnames'

type LinkProps = {
	href: string
	className?: string
}

export const Link: React.FC<LinkProps> = ({ href, className, children }) => {
	const componentClasses = classNames([className, styles.link])
	return (
		<a className={componentClasses} href={href}>
			{children}
		</a>
	)
}
