/** Default, simple text */
export type TextComponent = {
	cid: "text"
	args: TextArgs
}

export type TextArgs = {
		/** Text to be rendered */
		text: string
		/** Color of the text */
		color: string
		/** Optional styling preset */
		preset?: TextPreset
	}

export type TextPreset = "Heading"
