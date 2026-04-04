export default interface Navigator {
    screens: any[]
    push(path: string): void
    /**
     * @return path
     */
    pop(): string
    replace(path: string): void
}