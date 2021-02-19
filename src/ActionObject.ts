import { MethodObject } from "./MethodObject"
import { SearchComponent } from "./components/search"
import { MenuComponent } from "./components/menu"

/** An action, for example after pressing a button */
export type ActionObject = {
	/** A method to perform with the API */
	method?: MethodObject
	launch?: LaunchOption
}

export type LaunchOption = SearchComponent | MenuComponent
