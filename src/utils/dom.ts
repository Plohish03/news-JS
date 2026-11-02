export function getElement<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T {
    const element = root.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Element "${selector}" not found`);
    }

    return element;
}
