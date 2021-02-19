import { MethodObject } from "../MethodObject"
import { TextComponent } from "./text"

/** A styling component, orders components */
export type InputComponent = {
	cid: "input"
	args: InputArgs
}

export type InputArgs = {
	initial_value?: string
	label?: string
	/** This is special; should be used in constructing arguments */
	name?: string
	type?: string
	/** This should be displayed until clicked, then should turn into this input
	 * 	If there is a confirm_cancel, it should turn back into this after cancel/confirm.
	*/
	mask?: TextComponent
	confirm_cancel?: {
		enabled: boolean
		on_confirm: {
			method: MethodObject
		}
	}
}
