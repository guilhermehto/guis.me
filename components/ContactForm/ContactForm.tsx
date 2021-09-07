import React, { FormEvent, useState } from 'react'
import { SteppedForm } from '../SteppedForm'
import { FormStep } from '../SteppedForm/FormStep'

export const ContactForm: React.FC = () => {
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')

	return (
		<div className="flex">
			<SteppedForm onSubmit={(event: FormEvent<Element>) => {}}>
				<FormStep>
					<input
						value={input1}
						onChange={(event: any) => setInput1(event.target.value)}
					/>
				</FormStep>
				<FormStep>
					<input
						value={input2}
						onChange={(event: any) => setInput2(event.target.value)}
					/>
				</FormStep>
			</SteppedForm>
		</div>
	)
}
