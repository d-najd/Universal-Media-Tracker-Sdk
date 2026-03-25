import Plugin from '../../../../Plugin'

export type PluginFactoryHandlerResponse =
    | { readonly status: 'valid'; readonly plugin: Plugin, }
    | { readonly status: 'skip'; readonly reason?: string, }
    | { readonly status: 'invalid'; readonly reason: string }

export default PluginFactoryHandlerResponse
