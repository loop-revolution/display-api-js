import { MethodObject } from "../MethodObject"
import { TextComponent } from "./text"

export type RichTextComponent = {
	cid: "richtext"
	args: RichTextArgs
}

export type RichTextArgs = {
	/** The (inline) pieces of text to render */
	content: Array<TextComponent>
	/** Default to false, but if it is true then the document should be editable, easiest way is to use Slate.js */
	editable?: boolean
	/** The value to save should be exactly the same format as the `content` field is, as the object (not a string) */
	name?: string
	/** Method to call on save, which could be after pressing the save button or after a delay of edit. */
	save?: MethodObject
	/** Method to call when the "enter" or "return" key is pressed. */
	on_enter?: MethodObject
}
