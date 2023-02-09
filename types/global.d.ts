declare global {
    interface Window {
        versions: {
            node: () => string
        }
    }
}

export {};
