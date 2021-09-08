import React from 'react'
import classnames from 'classnames'

type InputProps = {
	label?: string
	value?: string | number
	onChange?: (event) => void
	className?: string
	id?: string
	name?: string
	type?: 'email' | 'number' | 'password' | 'text'
}

export const Input: React.FC<InputProps> = ({
	label,
	value,
	onChange,
	className,
	id,
	name,
	type = 'text',
}) => {
	const inputClasses = classnames([
		'appearance-none border-b-4 font-display  text-5xl text-center text-secondary p-2 focus:outline-none bg-ternary',
		className,
	])
	return (
		<div className="flex flex-col">
			{label && (
				<label htmlFor={id} className="font-display text-6xl mb-10 text-center">
					{label}
				</label>
			)}
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				className={inputClasses}
			/>
		</div>
	)
}
