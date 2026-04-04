import Navigator from '../../../../navigator/Navigator'
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
    readonly path: string
    /**
     * /library/:id
     */
    readonly pattern: string
}

export default ScreenHandlerArgs