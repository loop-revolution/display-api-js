export type ProgressComponent = {
	cid: "progress"
	args: ProgressArgs
}

export type ProgressArgs = {
	value: number
	/**
	 * The maximum value to scale the value.
	 * Default is 100, so default is %
	 * */
	max?: number
	/** In the ring, display this label and the value */
	inner_label?: string
	thickness?: string
	color?: string
}
