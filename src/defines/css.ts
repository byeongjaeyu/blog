export enum EColor {
    BLACK = '#060611',
    WHITE = '#FFFFFF',
    GREEN = '#009262',
    YELLOW = '#F3AC49',
    RED = '#D74C54',
    PRIMARY_LIGHT = '#42a5f5',
    PRIMARY_MAIN = '#1976d2',
    PRIMARY_DARK = '#1565c0',
    SECONDARY_LIGHT = '#ba68c8',
    SECONDARY_MAIN = '#9c27b0',
    SECONDARY_DARK = '#7b1fa2',
    ERROR_LIGHT = '#ef5350',
    ERROR_MAIN = '#d32f2f',
    ERROR_DARK = '#c62828',
    WARNING_LIGHT = '#ff9800',
    WARNING_MAIN = '#ed6c02',
    WARNING_DARK = '#e65100',
    INFO_LIGHT = '#03a9f4',
    INFO_MAIN = '#0288d1',
    INFO_DARK = '#01579b',
    SUCCESS_LIGHT = '#4caf50',
    SUCCESS_MAIN = '#2e7d32',
    SUCCESS_DARK = '#1b5e20',
}

export enum ZIndex {
    DEFAULT = 0,
    MODAL = 1,
    ALERT = 2,
}

export type Size = number | `${number}px` | `${number}%` | `${number}rem` | `${number}em` | 'fit-content' | 'auto';