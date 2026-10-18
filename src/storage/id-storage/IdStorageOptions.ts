import StorageOptions from "../StorageOptions"

type IdStorageOptions = StorageOptions & {
	/**
	 * The file extension used for newly created documents.
	 *
	 * @default "bin"
	 */
	fileExtension?: string
}

export const DefaultIdStorageOptions = (): Partial<IdStorageOptions> => ({
	policy: undefined, // If policy is undefined it checks across all policies
	backend: "indexeddb",
	profile: "default",
	fileExtension: "bin",
	driver: "id-storage",
})

export default IdStorageOptions
