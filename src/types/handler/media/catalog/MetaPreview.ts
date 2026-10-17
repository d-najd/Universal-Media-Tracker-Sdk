import ResourceType from "../ResourceType"

type MetaPreview = {
	readonly ids: string[]
	/**
	 * content type should be retrieved from the mime type
	 */
	readonly type: ResourceType | string
	readonly name: string
	readonly poster: string
}

export default MetaPreview
