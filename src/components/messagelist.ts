import { ComponentObject } from "../ComponentObject"
import { MethodObject } from "../MethodObject"
import { CustomMenuItem } from "./menu"

/** A component for seamlessly combining blocks into a list, like a document block */
export type MessageListComponent = {
	cid: "messagelist"
	args: MessageListArgs
}

export type MessageListArgs = {
	messages: MessageListMessage[]
	send_method?: MethodObject
	input_name?: string
	input_placeholder?: string
	color?: string
}

export type MessageListMessage = {
	/** Message component */
	component: ComponentObject
	author_display_name: string
	author_username: string
	sent_at: string
	stars?: number
	menu?: MessageListMessageMenu
}

export type MessageListMessageMenu = {
	/** Block ID */
	open_block_page?: string
	delete_block?: string
	custom?: CustomMenuItem[]
}
