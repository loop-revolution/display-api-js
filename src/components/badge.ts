import { ColorSchemes } from "../ColorSchemes"

export type BadgeComponent = {
	cid: "badge"
	args: BadgeArgs
}

export type BadgeArgs = {
	text: string
	/** Default: Subtle */
	variant?: BadgeVariant
	color_scheme?: ColorSchemes
	size?: string
}

export type BadgeVariant = "Outline" | "Solid" | "Subtle"
