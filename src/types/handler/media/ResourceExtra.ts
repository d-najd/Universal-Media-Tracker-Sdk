type ResourceExtra = {
    readonly name: string,
    /**
     * Maps to values in `ResourceExtraArgs`
     * `string` to `string`
     * `number` to `number`
     * `radio` to `string` uses `options`
     * `checkbox` to `string[]` uses `options`
     * `direction` to `asc | desc` optional `options`
     * `radioTriState` to `TriState` uses `options`
     * `checkboxTriState` to `TriState[]` uses `options`
     * @see ResourceExtra
     */
    readonly type: 'string' | 'number' | 'radio' | 'checkbox' | 'direction' | 'radioTriState' | 'checkboxTriState'
    readonly options?: string[]
    readonly isRequired?: boolean // default's false
    // readonly folder?: string // Planned for folders like in mihon
}

export default ResourceExtra