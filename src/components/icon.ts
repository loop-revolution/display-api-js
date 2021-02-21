export type IconComponent = {
	cid: "icon"
	args: IconArgs
}

export type IconArgs = {
	icon: IconName
	color?: string
	size?: string
}

export type IconName = "Folder" | "TaskComplete" | "Message" | "Box" | "Type" | "Feed" | "Plus"
