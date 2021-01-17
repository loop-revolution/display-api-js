/** Object to send to the API via the blockMethod mutation */
export type MethodObject = {
	/** Block Type */
	type: string
	/** ID of the block */
	block_id: string
	/** This is custom to the block type */
	method_name: string
	/** Template string that should be combined with other variables */
	arg_template: string
}
