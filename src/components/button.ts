import { ActionObject } from "../ActionObject"
import { ColorSchemes } from "../ColorSchemes"
import { IconName } from "./icon"

export type ButtonComponent = {
	cid: "button"
	args: ButtonArgs
}

export type ButtonArgs = {
	interact?: ActionObject
	text: string
	color_scheme?: ColorSchemes
	variant?: ButtonVariant
	icon?: IconName
	size?: ButtonSize
	disabled?: boolean
	readonly?: boolean
}

export type ButtonVariant = "Solid" | "Outline" | "Ghost" | "Link" | "Nostyle"
export type ButtonSize = "Small" | "Medium" | "Large"
