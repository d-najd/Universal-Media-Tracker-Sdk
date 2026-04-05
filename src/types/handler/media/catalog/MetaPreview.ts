import ResourceType from '../ResourceType'

type MetaPreview = {
	readonly id: string
	readonly type: ResourceType | string
	readonly name: string
	readonly poster: string
}

export default MetaPreview
