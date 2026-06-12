import ResourceType from '../ResourceType'

/**
* undefined fields will be fetched from MetaPreview
*/
type Meta = {
	readonly ids: Record<string, string>
   /**
   * content type should be retrieved from the mime type
   * Fetched from MetaPreview, 
   */
	readonly type?: ResourceType | string
   /**
   * Fetched from MetaPreview
   */
	readonly name?: string
   /**
   * Fetched from MetaPreview
   */
	readonly poster?: string
	readonly description?: string
	readonly released?: Date
	readonly year?: number
	readonly background?: string
	readonly logo?: string
}

export default Meta
