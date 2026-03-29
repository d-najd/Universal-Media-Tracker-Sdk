/**
 * Less strict version because helper scripts define default type and id
 * @see Handler
 */
type BaseHandler<T = any, R = any> = {
    readonly id?: string
    readonly type?: string
    readonly callback: (args: T) => Promise<R>
}

export default BaseHandler
