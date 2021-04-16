import { IconName } from "./icon"
import { ActionObject } from "../ActionObject"
/**
 * The menu component isn't a usual component, and doesn't have a CID, but
 * is used in block cards & pages.
 * */
export type MenuComponent = {
	cid: "menu"
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
		public?: boolean
		full: number
		edit: number
		view: number
	}
	/**
	 * When on mobile, these items should be a part of the menu like everything else, but
	 * on the web these should be icons next to the button to open the menu.
	 * */
	custom?: CustomMenuItem[]
	/** The number of comments on the block */
	comment_count?: number
}

export type CustomMenuItem = {
	icon: IconName
	text: string
	interact?: ActionObject
	disabled?: boolean
}
