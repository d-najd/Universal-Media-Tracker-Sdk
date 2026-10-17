/**
 * The lifecycle tier of a stored entry.
 *
 * - `session` — cleared on app shutdown.
 * - `cache` — evicted by LRU when the cache size limit is reached.
 * - `persistent` — never auto-evicted.
 */
type StoragePolicy = "session" | "cache" | "persistent"

export default StoragePolicy
