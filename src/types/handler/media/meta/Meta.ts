import ResourceType from "../ResourceType"

type Meta = {
	readonly id: string
	readonly type: ResourceType | string
	readonly name: string
	readonly poster: string

   readonly description?: string
   readonly released?: string
   readonly year?: string
   readonly background?: string
   readonly logo?: string
}

export default Meta
