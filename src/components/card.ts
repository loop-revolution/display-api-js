import { ComponentObject } from "../ComponentObject"
import { TextComponent } from "./text"

/** Card styling for displaying Block data on other pages */
export type CardComponent = {
	cid: "card"
	args: CardArgs
}

export type CardArgs = {
	/** Data on the card's header */
	header?: {
		/** Title on the top of the card */
		title: TextComponent
		/** Icon to display next to the title */
		icon?: IconName
		/** The ID of the block, purely for card linking */
		block_id?: string
	}
	/** Card's accent color (hex color w/ #) */
	color?: string
	/** Main content of the card */
	content: ComponentObject
	// TODO: Add plus button option for group blocks
}

export type IconName = "Folder" | "TaskComplete" | "Message" | "Box" | "Type" | "Feed"
