import { TextComponent } from "./text"

export type LinkComponent = {
	cid: "link"
	args: LinkArgs
}

export type LinkArgs = {
	text: TextComponent
	external?: boolean
	/** See the redirect option in the action object */
	app_path?: string
	url?: string
}
