import { ComponentObject } from "../ComponentObject"
import { MenuComponent } from "./menu"

/** A component for seamlessly combining blocks into a list, like a document block */
export type DisplayListComponent = {
	cid: "displaylist"
	args: DisplayListArgs
}

export type DisplayListArgs = {
	/** All the items to include */
	items: DisplayListItem[]
	color?: string
}

export type DisplayListItem = {
	/** The component to render */
	component: ComponentObject
	/** The menu to the left of the component */
	menu?: MenuComponent
}
