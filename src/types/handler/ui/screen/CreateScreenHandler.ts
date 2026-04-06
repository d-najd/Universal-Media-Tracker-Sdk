import CreateCustomScreenHandler from './CreateCustomScreenHandler'

/**
 * Uses zustand, react is also recommended
 */
type CreateScreenHandler<
	S extends StoreWrapper<S> = StoreWrapper
> = CreateCustomScreenHandler<S> & {}
export default CreateScreenHandler
