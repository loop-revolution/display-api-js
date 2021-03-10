import { IconName } from "./icon"
import { ActionObject } from "../ActionObject"
import { ColorSchemes } from "../ColorSchemes"

export type DropdownComponent = {
	cid: "dropdown"
	args: DropdownArgs
}

export type DropdownArgs = {
	color_scheme?: ColorSchemes
	/** The default value (index of the options) */
	default?: number
	disabled?: boolean
	name?: string
	on_change?: ActionObject
	options: DropdownOption[]
	readonly?: boolean
	variant?: DropdownVariant
}

export type DropdownOption = {
	icon?: IconName
	text: string
}

/** Default is filled */
export type DropdownVariant = "Filled" | "Outline"
