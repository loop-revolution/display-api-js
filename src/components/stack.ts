import { ComponentObject } from "../ComponentObject";

/** A styling component, orders components */
export type StackComponent = {
	cid: "stack",
	args: StackArgs
}

export type StackArgs = {
	/** Direction to stack the items */
	direction: "horizontal" | "vertical" | "fit"
	/** List of components to include in the stack */
	items: Array<{
		component: ComponentObject
	}>
}
