import CreateCustomScreenHandler from './CreateCustomScreenHandler'
import {ZustandStoreWrapper } from "./ZustandStoreWrapper";

/**
 * Uses zustand, react is also recommended
 */
type CreateScreenHandler<S extends ZustandStoreWrapper<S>> = CreateCustomScreenHandler<
	S
> & {}

export default CreateScreenHandler
