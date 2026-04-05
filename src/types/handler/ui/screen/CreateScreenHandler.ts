import CreateCustomScreenHandler from './CreateCustomScreenHandler'
import {ZustandScreenStore} from "./ZustandScreenStore";

/**
 * Uses zustand, react is also recommended
 */
type CreateScreenHandler<S = any> = CreateCustomScreenHandler<
	ZustandScreenStore<S>
> & {}

export default CreateScreenHandler
