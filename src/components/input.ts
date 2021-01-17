import { MethodObject } from '../MethodObject';

/** A styling component, orders components */
export type InputComponent = {
	cid: "input"
	args: InputArgs
}

export type InputArgs = {
	initial_value?: string
	label?: string
	name?: string
	type?: string
	confirm_cancel?: {
		enabled: boolean
		on_confirm: {
			method: MethodObject
		}
	}
}
