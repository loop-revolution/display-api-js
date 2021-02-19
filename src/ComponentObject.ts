import { TextComponent } from "./components/text"
import { StackComponent } from "./components/stack"
import { CardComponent } from "./components/card"
import { InputComponent } from "./components/input"
import { IconComponent } from "./components/icon"
import { ButtonComponent } from "./components/button"
import { BlockList } from "./components/blocklist"

export type ComponentObject =
	| CardComponent
	| TextComponent
	| StackComponent
	| InputComponent
	| IconComponent
	| ButtonComponent
	| BlockList
