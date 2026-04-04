import Navigator from '../Navigator'
import { UseBoundStore, StoreApi } from "zustand";

type ScreenHandlerArgs<S = any> = {
    /**
     * If undefined in handler won't be passed here
     */
    readonly state?: UseBoundStore<StoreApi<S>>
    readonly navigator: Navigator
    /**
     * /library/1
     */
    readonly resolvedPath: string
    /**
     * /library/:id
     */
    readonly path: string
}

export default ScreenHandlerArgs