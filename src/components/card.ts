import { ComponentObject } from "../ComponentObject"
import { IconName } from "./icon"
import { MenuComponent } from "./menu"
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
		/** Block actions in a menu */
		menu?: MenuComponent
		/**
		 * Custom header to show instead of title & icon.
		 * There shouldn't be anything clickible here.
		 * The menu should still be appended to the side of this.
		 * */
		custom?: ComponentObject
	}
	/** Card's accent color (hex color w/ #) */
	color?: string
	/** Main content of the card */
	content: ComponentObject
	detached_menu?: DetachedMenu
	/** If it just doesn't work on mobile, use this as an override */
	mobile_override?: CardArgs
}

export type DetachedMenu = {
	location: "BottomRight"
	menu: MenuComponent
}
