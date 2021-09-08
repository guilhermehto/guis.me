import React, { FormEvent, ReactElement, ReactNode, useState } from 'react'
import classnames from 'classnames'

import { Button } from '../Button'
import { FormStep } from './FormStep'

import styles from './SteppedForm.module.scss'

type FormProps = {
	onSubmit: (event: FormEvent) => void
	children: ReactElement[]
}

export const SteppedForm: React.FC<FormProps> = (props) => {
	const [step, setStep] = useState(0)
	const submitDivClasses = classnames('flex justify-center mt-10', {
		invisible: step !== props.children.length - 1,
	})

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
		<form className="flex flex-col" onSubmit={onSubmit}>
			<div className="flex justify-center mb-5">
				<StepIndicator currentStep={step} steps={props.children.length} />
			</div>

			<div className="flex items-center">
				<Button dropShadowSide="right" className="mr-10" onClick={onClickBack}>
					Back
				</Button>
				{props.children[step]}
				<Button className="ml-10" onClick={onClickNext}>
					Next
				</Button>
			</div>

			<div className={submitDivClasses}>
				<Button onClick={onClickNext} dropShadowSide="center">
					Submit
				</Button>
			</div>
		</form>
	)
}

type StepIndicatorProps = {
	steps: number
	currentStep: number
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
	const activeStepClasses = classnames([
		'h-4 w-4 mx-3',
		styles['step-indicator'],
		styles['active'],
	])
	const stepClasses = classnames('h-4 w-4 mx-3', styles['step-indicator'], styles['inactive'])
	const stepIndicator: ReactNode[] = []

	for (let index = 0; index < steps; index++) {
		stepIndicator.push(
			<div
				className={currentStep === index ? activeStepClasses : stepClasses}
				key={index}
			></div>
		)
	}
	return <> {stepIndicator} </>
}
