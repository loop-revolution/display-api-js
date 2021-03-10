import { IconName } from "./icon"
import { ActionObject } from "../ActionObject"
import { ComponentObject } from "../ComponentObject"

export type ActionPopoverComponent = {
	cid: "actionpopover"
	args: ActionPopoverArgs
}

export type ActionPopoverArgs = {
	trigger?: ComponentObject
	actions: ActionPopoverAction[]
}

export type ActionPopoverAction = {
	icon?: IconName
	text: string
	interact?: ActionObject
}
