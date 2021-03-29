import { ActionObject } from "../ActionObject"
import { ButtonArgs } from "./button"

export type StickyToggleButtonComponent = {
	cid: "stickytogglebutton"
	args: StickyToggleButtonArgs
}

export type StickyToggleButtonArgs = {
	button: ButtonArgs
	name?: string
	on_change?: ActionObject
	default_value?: boolean
}
