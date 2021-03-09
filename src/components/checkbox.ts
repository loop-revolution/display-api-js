import { ColorSchemes } from "../ColorSchemes"
import { TextComponent } from "./text"
import { ActionObject } from "../ActionObject"

export type CheckboxComponent = {
	cid: "checkbox"
	args: CheckboxArgs
}

export type CheckboxArgs = {
	color_scheme?: ColorSchemes
	color?: string
	variant?: CheckboxVariant
	readonly?: boolean
	disabled?: boolean
	name?: string
	/** See the `variant` explanations for what values mean what */
	value: number
	text?: TextComponent
	on_change?: ActionObject
}

/**
 * Default:
 * 	0: Not checked
 * 	1: Checked
 * Cancel:
 * 	0: Not checked
 * 	1: Check completed
 * 	2: Check cancelled
 */
export type CheckboxVariant = "Default" | "Cancel"
