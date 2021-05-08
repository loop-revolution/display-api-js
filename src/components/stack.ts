import { ComponentObject } from "../ComponentObject"

/** A styling component, orders components */
export type StackComponent = {
	cid: "stack"
	args: StackArgs
}

export type StackArgs = {
	/** Direction to stack the items, default is "Fit" */
	direction?: "Horizontal" | "Vertical" | "Fit" | "Masonry"
	/** List of components to include in the stack */
	items: Array<{
		component: ComponentObject
	}>
	align_y?: "Top" | "Middle" | "Bottom"
	align_x?: "Left" | "Middle" | "Right"
	spacing?: "between" | "around" | "default"
}
