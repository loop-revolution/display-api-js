/** Default, simple text */
export type TextComponent = {
	cid: "text"
	args: {
		/** Text to be rendered */
		text: string
		/** Color of the text */
		color: string
		/** Optional styling preset */
		preset?: TextPreset
	}
}

export type TextPreset = "heading"
