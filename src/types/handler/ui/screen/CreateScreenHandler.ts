import CreateCustomScreenHandler from './CreateCustomScreenHandler'
import {ZustandStoreWrapper} from "./ZustandStoreWrapper";

/**
 * Uses zustand, react is also recommended
 */
type CreateScreenHandler<S = any> = CreateCustomScreenHandler<
	ZustandStoreWrapper<S>
> & {}

export default CreateScreenHandler
