import { ColorSchemes } from "../ColorSchemes"

/** Default, simple text */
export type TextComponent = {
	cid: "text"
	args: TextArgs
}

export type TextArgs = {
	/** Text to be rendered */
	text: string
	/** Color of the text */
	color?: string
	color_scheme?: ColorSchemes
	/** Optional styling preset */
	preset?: TextPreset
	bold?: boolean
	italic?: boolean
	underline?: boolean
	strikethrough?: boolean
	monospace?: boolean
	tiny_space?: boolean
}

export type TextPreset = "Heading" | "Info" | "Default" | "Warn" | "Error"
