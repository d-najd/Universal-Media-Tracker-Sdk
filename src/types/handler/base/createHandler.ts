import BaseHandler from "./baseHandler";

type CreateHandler<T = any, R = any> = BaseHandler<T, R> & {
    type: string
}

export default CreateHandler
