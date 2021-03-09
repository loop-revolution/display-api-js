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
	/** Redirect to a link */
	redirect?: RedirectObject
}

export type RedirectObject = {
	/**
	 * A path that goes after https://app.loop.page/
	 * e.g `b/100` -> https://app.loop.page/b/100
	 * This makes it easier for development.
	 * */
	app_path?: string
	/** The full URL to redirect to */
	url?: string
}
