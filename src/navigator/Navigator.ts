import NavigatorEntry from "./NavigatorEntry";

export default interface Navigator {
    screens: NavigatorEntry[]
    push(path: string): void
    pop(): void
    replace(path: string): void
}