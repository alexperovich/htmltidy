export function tidy(text: string, callback: (err: any, html: string) => void);
export function tidy(text: string, options: {
    doctype?: string;
    hideComments?: boolean;
    indent?: boolean;
}, callback: (err: any, html: string) => void);