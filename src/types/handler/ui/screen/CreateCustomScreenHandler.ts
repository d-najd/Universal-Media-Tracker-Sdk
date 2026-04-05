// type CreateScreenHandler<S = any> = BaseHandler<ScreenHandlerArgs<S>, ScreenHandlerResponse> & {
//     /**
//      * /library/:id
//      */
//     readonly pattern: string
//     /**
//      * If undefined screen state won't be stored
//      */
//     readonly initialState?: UseBoundStore<StoreApi<S>>
// }
//
// export default CreateScreenHandler

type CreateCustomScreenHandler<S> = BaseHandler<
	ScreenHandlerArgs<S>,
	ScreenHandlerResponse
> & {
	/**
	 * /library/:id
	 */
	readonly pattern: string
	/**
	 * If undefined screen state won't be stored
	 */
	readonly initialState?: UseBoundStore<StoreApi<S>>
}

export default CreateScreenHandler
