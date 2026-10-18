import StoredData from "../StoredData"
import IdStorageOptions from "./IdStorageOptions"

/**
 * Stores entries by one of many id's
 */
export default interface IdStorage {
/**
	 * Finds an entry by any of its registered IDs.
	 *
	 * @param id The ID string in `provider:id` format (e.g., "imdb:tt123"). 
    *           If without provider normalized to `unknown:id`
	 *
	 * @throws Error if no entry matches `id`.
	 * @throws Error if the ID format is invalid
	 */
	readById(
		id: string,
		options?: Partial<IdStorageOptions>,
	): Promise<StoredData>

	/**
	 * Reads the metadata for an entry by any of its registered IDs.
    *
	 * @param id The ID string in `provider:id` format (e.g., "imdb:tt123"). 
    *           If without provider normalized to `unknown:id`
	 *
	 * @throws Error if no entry matches `id`.
	 * @throws Error if the ID format is invalid
	 */
	readMetadataById(
		id: string,
		options?: Partial<IdStorageOptions>,
	): Promise<IdStorageOptions>

	/**
	 * Creates a new entry or overrides the data and aliases of an existing one.
	 *
    * @param ids IDs to associate with this data. If any ID already exists,
	 *            the data and alias set are replaced. If none exist, a new entry is created.
    *            If without provider normalized to `unknown:id`
	 * @param data The data to store.
	 *
	 * @throws Error if the provided IDs resolve to more than one existing entry.
	 * @throws Error if empty array of `ids` is passed.
	 * @throws Error if any of the IDs have an invalid format.
	 */
	write(
		ids: string[],
		data: StoredData,
		options?: Partial<IdStorageOptions>,
	): Promise<void>

	/**
	 * Adds aliases to an existing entry.
	 *
	 * @param id An existing ID used to locate the entry. If without provider normalized to `unknown:id`
	 * @param ids The new aliases to add. IDs without provider are normalized to `unknown:id`.
	 *
	 * @throws Error if no entry matches `id`.
	 * @throws Error if any of the new `ids` already belong to a different entry.
	 * @throws Error if any of the IDs have an invalid format.
	 */
	addAliases(
		id: string,
		ids: string[],
		options?: Partial<IdStorageOptions>,
	): Promise<void>

	/**
	 * Removes aliases from an existing entry.
	 * If the removed IDs are the last aliases pointing to the entry,
	 * the entry is automatically deleted.
	 *
	 * @param id An existing ID used to locate the entry. If without provider normalized to `unknown:id`
	 * @param ids The new aliases to add. IDs without provider are normalized to `unknown:id`.
	 *
	 * @throws Error if no entry matches `id`.
	 * @throws Error if any of the IDs have an invalid format.
	 */
	removeAliases(
		id: string,
		ids: string[],
		options?: Partial<IdStorageOptions>,
	): Promise<void>

	/**
	 * Deletes an entry by any of its registered IDs.
    *
	 * @param id The ID string in `provider:id` format (e.g., "imdb:tt123"). 
    *           If without provider normalized to `unknown:id`
	 *
	 * @throws Error if no entry matches `id`.
	 * @throws Error if any of the IDs have an invalid format.
	 */
	deleteById(id: string, options?: Partial<IdStorageOptions>): Promise<void>
}
