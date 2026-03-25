/**
 * Less strict version because helper scripts define default type and id
 * @see Handler
 */
type BaseHandler<T = any, R = any> = {
    id?: string
    type?: string
    callback: (args: T) => Promise<R>
}

export default BaseHandler
