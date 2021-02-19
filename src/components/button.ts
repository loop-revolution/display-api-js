import { ActionObject } from "../ActionObject"
import { IconName } from "./icon"

export type ButtonComponent = {
	cid: "button"
	args: ButtonArgs
}

export type ButtonArgs = {
	interact?: ActionObject
	text: string
	color_scheme?: string
	variant?: ButtonVariant
	icon?: IconName
	size?: string
}

export type ButtonVariant = "Solid" | "Outline" | "Ghost" | "Link" | "Nostyle"
