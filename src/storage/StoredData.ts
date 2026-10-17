/**
 * The raw payload of a storage entry.
 *
 * `string` for text and JSON; `Uint8Array` for binary (images, video chunks).
 */
type StoredData = string | Uint8Array

export default StoredData
