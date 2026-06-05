import ResourceType from "../ResourceType"

type Meta = {
	readonly id: string
	readonly type: ResourceType | string
	readonly name: string
	readonly poster: string
}

export default Meta
