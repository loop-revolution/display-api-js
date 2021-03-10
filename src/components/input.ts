import { MethodObject } from "../MethodObject"
import { TextComponent } from "./text"

export type InputComponent = {
	cid: "input"
	args: InputArgs
}

export type InputArgs = {
	initial_value?: string
	label?: string
	/** This is special; should be used in constructing arguments */
	name?: string
	type?: InputType
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
	disabled?: boolean
	size?: InputSize
}

export type InputType = "Text" | "Number" | "Date" | "Time" | "Frequency"
export type InputSize = "Large" | "Medium" | "Small" | "MultiLine" | "Flexible"
