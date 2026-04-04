import BaseHandler from "../../base/BaseHandler";
import ScreenHandlerArgs from "./ScreenHandlerArgs";
import ScreenHandlerResponse from "./ScreenHandlerResponse";
import {StoreApi, UseBoundStore} from "zustand";

type CreateScreenHandler<S = any> = BaseHandler<ScreenHandlerArgs<S>, ScreenHandlerResponse> & {
    /**
     * /library/:id
     */
    readonly path: string
    /**
     * If undefined screen state won't be stored
     */
    readonly initialState?: UseBoundStore<StoreApi<S>>
}

export default CreateScreenHandler
