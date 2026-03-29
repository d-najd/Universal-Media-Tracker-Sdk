type ResourceExtra = {
    readonly name: string,
    readonly type: 'string' | 'number' | 'radio' | 'checkbox'
    readonly isRequired?: boolean // default's false
}

export default ResourceExtra