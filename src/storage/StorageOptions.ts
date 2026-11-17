import StorageBackend from "./StorageBackend"
import StoragePolicy from "./StoragePolicy"

/**
 * On-disk layout:
 *
 * default/ (profile)
 * ├── session/ (policy)
 * │   ├── user.json
 * │   └── movies/
 * │       └── movie.json
 * ├── cache/ (policy)
 * ├── persistent/ (policy)
 * └── .meta/ (all metadata lives here)
 *     ├── directory-storage/ (driver)
 *     │   ├── user.json
 *     │   └── movies/
 *     │       └── movie.json
 *     └── id-storage/ (driver)
 *         └── movies/
 *             └── movie.json
 */
type StorageOptions = {
	/**
	 * When undefined, the best available backend is chosen automatically.
	 */
	backend: StorageBackend

	/**
	 * Every stored entry belongs to exactly one policy.
	 *
	 * @default "cache"
	 */
	policy: StoragePolicy

	/**
	 * @default "default"
	 */
	profile: string

	createdAt: number
	updatedAt: number

	ttl?: number

	/**
	 * The module that last created or modified this entry (e.g., "dir-storage", "id-storage").
	 * Used to determine how the entry should be parsed or routed.
	 */
	driver?: string

	custom?: Record<string, string>
}

export default StorageOptions
