export interface theme {
    palette: {
        mode: string,
        primary: {
            main: string,
            contrastText: string
        },
        secondary: {
            main: string,
            contrastText: string
        },
        text: {
            primary: string,
            secondary: string
        },
        background: {
            default: string,
            paper: string
        },
        warning: {
            main: string,
        },
        info: {
            main: string,
        },
        success: {
            main: string,
        },
        error: {
            main: string,
        },
        contrastThreshold: number,
        tonalOffset: number,
    },
}