type ResourceBrowseOptionDefaults =
	| 'search' // type string
	| 'skip' // type number (int), `isRequired` always false
	| 'genre' // type string[]

export default ResourceBrowseOptionDefaults
