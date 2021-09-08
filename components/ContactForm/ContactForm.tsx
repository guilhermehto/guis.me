import React, { FormEvent, useState } from 'react'
import { Input } from '../Input'
import { SteppedForm } from '../SteppedForm'
import { FormStep } from '../SteppedForm/FormStep'

export const ContactForm: React.FC = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	return (
		<div className="flex">
			<SteppedForm onSubmit={(event: FormEvent<Element>) => {}}>
				<FormStep>
					<Input
						label="Your beautiful name"
						id="name-input"
						value={name}
						onChange={(event: any) => setName(event.target.value)}
					/>
				</FormStep>
				<FormStep>
					<Input
						label="E-mail, please"
						value={email}
						onChange={(event: any) => setEmail(event.target.value)}
					/>
				</FormStep>

				<FormStep>
					<Input
						label="Your message"
						value={message}
						onChange={(event: any) => setMessage(event.target.value)}
					/>
				</FormStep>
			</SteppedForm>
		</div>
	)
}
