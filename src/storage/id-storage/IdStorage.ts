import StoredData from "../StoredData"
import IdStorageOptions from "./IdStorageOptions"

/**
 * TODO add tests for the rest of the methods
 *
 * Stores entries by one of many id's
 */
export default interface IdStorage {
	/**
	 * Returns a list of all stored entries, grouped by their aliases.
	 * Useful for building a UI library view without showing duplicate aliases.
	 */
	list(options?: Partial<IdStorageOptions>): Promise<string[][]>

	/**
	 * Checks if an entry exists without loading its raw data into memory.
	 * Useful for cache checks.
	 *
	 * @param id The ID string in `provider:id` format. Bare IDs are normalized to `unknown:id`.
	 */
	exists(id: string, options?: Partial<IdStorageOptions>): Promise<boolean>

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
	 * Updates the metadata of an existing entry without changing its raw data or aliases.
	 * Useful for extending TTL or updating custom tags.
	 *
	 * @param id An existing ID used to locate the entry.
	 * @param metadata The metadata fields to patch (e.g., ttl, custom tags).
	 *
	 * @throws Error if no entry matches `id`.
	 */
	updateMetadata(
		id: string,
		metadata: Partial<IdStorageOptions>,
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

	/**
	 * Deletes all entries and aliases managed by this IdStorage instance.
	 *
	 * @remarks This is a destructive, irreversible operation. It clears the index
	 * and all associated data files for the current path/profile.
	 */
	clear(options?: Partial<IdStorageOptions>): Promise<void>
}
