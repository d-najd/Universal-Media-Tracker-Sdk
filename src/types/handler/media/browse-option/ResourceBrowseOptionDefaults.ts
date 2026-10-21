type ResourceBrowseOptionDefaults =
	| "search" // type string
	| "skip" // type number (int), `isRequired` always false
	| "genre" // type string[]
	| "preferredPageSize" // type number (int), default 20, If plugin supports should smartly auto-fill if fetch too big or too small

export default ResourceBrowseOptionDefaults
