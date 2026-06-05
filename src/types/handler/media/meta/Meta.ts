import ResourceType from '../ResourceType'

type Meta = {
	readonly id: string
	readonly type: ResourceType | string
	readonly name: string
	/**
	 * if undefined will get from MetaPreview
	 */
	readonly poster?: string

	readonly description?: string
	readonly released?: Date
	readonly year?: number
	readonly background?: string
	readonly logo?: string
}

export default Meta
