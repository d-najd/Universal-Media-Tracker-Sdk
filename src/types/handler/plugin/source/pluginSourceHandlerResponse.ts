export type PluginSourceHandlerResponse =
    | { readonly status: 'valid'; readonly code: string, }
    | { readonly status: 'skip'; readonly reason?: string, }
    | { readonly status: 'invalid'; readonly reason: string }

export default PluginSourceHandlerResponse