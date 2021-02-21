import { ActionObject } from "../ActionObject"

export type SearchComponent = {
	cid: "search"
	/**
	 * This is special; should be used in constructing arguments.
	 * Similar to input name, but the value to substitute should be the
	 * id of what is selected.
	 * */
	name?: string
	type?: SearchType
	/** What to do when selected */
	then?: ActionObject
	/** What to do when selection is cancelled */
	cancel?: ActionObject
	/** What to display when choosing a block */
	action_text?: string
}

export type SearchType = "Block" | "User"
