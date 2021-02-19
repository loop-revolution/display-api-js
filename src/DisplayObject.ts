import { ComponentObject } from "./ComponentObject"

/** What will be returned from the Loop API */
export type DisplayObject = {
	/** Visual components on the page */
	display: ComponentObject
	/** Metadata contains data that effects outside the display */
	meta?: {
		/** Contents for block page display objects */
		page?: {
			/** The HTML <title> tag */
			title?: string
			/** The header text for the block page */
			header?: string
		}
	}
}
