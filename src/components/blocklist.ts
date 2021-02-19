export type BlockList = {
	cid: "blocklist"
	args: BlocklistArgs
}

export type BlocklistArgs = {
	/** Initial list of ids. Breadcrumbs need to be queried from front-end */
	initial_value?: number[]
	/**
	 * The name of the arg to return, should replace instances of this (like input)
	 * but the value should be an array of block ids.
	 */
	name?: string
	/** Should the user be able to add other blocks to the list? Default true */
	able_to_add_items?: boolean
}
