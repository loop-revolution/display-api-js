import { TextComponent } from "./components/text"
import { StackComponent } from "./components/stack"
import { CardComponent } from "./components/card"
import { InputComponent } from "./components/input"
import { IconComponent } from "./components/icon"
import { ButtonComponent } from "./components/button"
import { BlockList } from "./components/blocklist"
import { BadgeComponent } from "./components/badge"
import { ProgressComponent } from "./components/progress"
import { CheckboxComponent } from "./components/checkbox"

export type ComponentObject =
	| BadgeComponent
	| BlockList
	| ButtonComponent
	| CardComponent
	| CheckboxComponent
	| IconComponent
	| InputComponent
	| ProgressComponent
	| StackComponent
	| TextComponent
