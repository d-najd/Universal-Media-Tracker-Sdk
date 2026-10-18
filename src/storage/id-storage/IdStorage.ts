import StoredData from "../StoredData"
import IdStorageOptions from "./IdStorageOptions"

/**
 * Stores entries by one of many id's
 */
export default interface IdStorage {
	/**
	 * Finds an entry by any of its registered IDs.
	 *
	 * @throws Error if no entry matches `id`.
	 */
	readById(
		id: string,
		options?: Partial<IdStorageOptions>
	): Promise<StoredData>

	/**
	 * Reads the metadata for an entry by any of its registered IDs.
	 *
	 * @throws Error if no entry matches `id`.
	 */
	readMetadataById(
		id: string,
		options?: Partial<IdStorageOptions>
	): Promise<IdStorageOptions>

	/**
	 * Creates a new entry or overrides the data and aliases of an existing one.
	 *
	 * @param data The data to store.
	 * @param ids IDs to associate with this data. If any ID already exists,
	 *            the data and alias set are replaced. If none exist, a new entry is created.
	 *
	 * @throws Error if the provided IDs resolve to more than one existing entry.
	 * @throws Error if empty array of `ids` is passed.
	 */
	write(
		ids: string[],
		data: StoredData,
		options?: Partial<IdStorageOptions>
	): Promise<void>

	/**
	 * Adds aliases to an existing entry.
	 *
	 * @param id An existing ID used to locate the entry.
	 * @param ids The new aliases to add.
	 *
	 * @throws Error if no entry matches `id`.
	 * @throws Error if any of the new `ids` already belong to a different entry.
	 */
	addAliases(
		id: string,
		ids: string[],
		options?: Partial<IdStorageOptions>
	): Promise<void>

	/**
	 * Removes aliases from an existing entry.
	 * If the removed IDs are the last aliases pointing to the entry,
	 * the entry is automatically deleted.
	 *
	 * @param id An existing ID used to locate the entry.
	 * @param ids The aliases to remove.
	 *
	 * @throws Error if no entry matches `id`.
	 */
	removeAliases(
		id: string,
		ids: string[],
		options?: Partial<IdStorageOptions>
	): Promise<void>

	/**
	 * Deletes an entry by any of its registered IDs.
	 *
	 * @throws Error if no entry matches `id`.
	 */
	deleteById(id: string, options?: Partial<IdStorageOptions>): Promise<void>
}
