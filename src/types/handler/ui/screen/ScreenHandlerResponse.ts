import { ReactNode } from 'react'

type ScreenHandlerResponse = {
	// readonly framework: 'react' // if undefined assumed react
	readonly content: ReactNode
}

export default ScreenHandlerResponse
