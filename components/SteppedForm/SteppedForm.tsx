import React, { FormEvent, ReactElement, useState } from 'react'
import { Button } from '../Button'
import { FormStep } from './FormStep'

type FormProps = {
	onSubmit: (event: FormEvent) => void
	children: ReactElement[]
}

export const SteppedForm: React.FC<FormProps> = (props) => {
	const [step, setStep] = useState(0)

	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
		props.onSubmit && props.onSubmit(event)
	}

	const onClickBack = () => {
		setStep(step - 1 < 0 ? 0 : step - 1)
	}

	const onClickNext = () => {
		setStep(step + 1 === props.children.length ? props.children.length - 1 : step + 1)
	}

	console.log(typeof props.children[0]?.type === typeof FormStep)

	return (
		<div className="ml-60">
			<form className="flex mx-auto" onSubmit={onSubmit}>
				<Button
					dropShadowSide="right"
					className="mr-10"
					onClick={() => {
						console.log('back')
					}}
				>
					Back
				</Button>
				{props.children[step]}
				<Button
					className="ml-10"
					onClick={() => {
						console.log('back')
					}}
				>
					Next
				</Button>
			</form>
		</div>
	)
}
