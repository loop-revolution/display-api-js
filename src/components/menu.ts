import { ComponentObject } from "../ComponentObject"
import { TextComponent } from "./text"

/**
 * The menu component isn't a usual component, and doesn't have a CID, but
 * is used in block cards & pages.
 * */
export type MenuComponent = {
	args: MenuArgs
}

export type MenuArgs = {
	/** The block id to use in mutations that occur from other fields */
	block_id: number
	/** Clicking this should send starring mutation */
	star_button?: {
		starred: boolean
		count: number
	}
	/** Clicking this should send the notification enabled mutation */
	notifications_enabled?: boolean
	/** After confirming to delete the block, should send a block deletion mutation */
	delete?: boolean
	/** Clicking should open a permissions screen, this is the number of people with permissions */
	permissions?: {
		public: boolean
		full: number
		edit: number
		view: number
	}
}
