import { StoreApi, UseBoundStore } from 'zustand'
import CreateCustomScreenHandler from './CreateCustomScreenHandler'

/**
 * Uses zustand, react is also recommended
 */
type CreateScreenHandler<S = any> = CreateCustomScreenHandler<
	UseBoundStore<StoreApi<S>>
> & {}

export default CreateScreenHandler
