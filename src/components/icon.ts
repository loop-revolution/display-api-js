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

export type IconName =
	| "Anchor"
	| "Archive"
	| "Award"
	| "Book"
	| "Bookmark"
	| "Box"
	| "Briefcase"
	| "Calendar"
	| "Camera"
	| "Edit"
	| "Eye"
	| "Feed"
	| "File"
	| "FileText"
	| "Film"
	| "Filter"
	| "Flag"
	| "Folder"
	| "Gift"
	| "Heart"
	| "Image"
	| "Info"
	| "Key"
	| "Lock"
	| "Map"
	| "MapPin"
	| "Message"
	| "Minus"
	| "Plus"
	| "Send"
	| "TaskComplete"
	| "ThumbsDown"
	| "ThumbsUp"
	| "Trash"
	| "Type"
	| "Unlock"
