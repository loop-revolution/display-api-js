import { MethodObject } from "./MethodObject"
import { SearchComponent } from "./components/search"
import { MenuComponent } from "./components/menu"

/** An action, for example after pressing a button */
export type ActionObject = {
	/** A method to perform with the API */
	method?: MethodObject
	/** A search component to open for the action.
	    These components have their own action objects for after. */
	search?: SearchComponent
}
