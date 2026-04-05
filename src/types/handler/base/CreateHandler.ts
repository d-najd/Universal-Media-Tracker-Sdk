import BaseHandler from './BaseHandler'

type CreateHandler<T = any, R = any> = BaseHandler<T, R> & {
	readonly type: string
}

export default CreateHandler
