import ResourceBrowseOptionDefaults from './ResourceBrowseOptionDefaults'

/**
 * @see ResourceBrowseOptionDefaults
 * @see ResourceBrowseOptionArgs
 */
type ResourceBrowseOption = {
	readonly name: ResourceBrowseOptionDefaults | string
	/**
	 * Maps to values in `ResourceExtraArgs`
	 * `string` to `string`
	 * `number` to `number`
	 * `radio` to `string` uses `options`
	 * `checkbox` to `string[]` uses `options`
	 * `direction` to `asc | desc` optional `options`
	 * `radioTriState` to `TriState` uses `options`
	 * `checkboxTriState` to `TriState[]` uses `options`
	 * @see ResourceBrowseOption
	 */
	readonly type:
		| 'string'
		| 'number'
		| 'radio'
		| 'checkbox'
		| 'direction'
		| 'radioTriState'
		| 'checkboxTriState'
	/**
	 * Used if there are multiple options, to define which they are, like [action, adventure, drama]
	 */
	readonly options?: string[]
	/**
	 * @default false
	 */
	readonly isRequired?: boolean
}

export default ResourceBrowseOption
