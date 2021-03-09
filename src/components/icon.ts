import { ColorSchemes } from "../ColorSchemes"

export type IconComponent = {
	cid: "icon"
	args: IconArgs
}

export type IconArgs = {
	icon: IconName
	color?: string
	color_scheme?: ColorSchemes
	size?: string
}

export type IconName = "Folder" | "TaskComplete" | "Message" | "Box" | "Type" | "Feed" | "Plus"
