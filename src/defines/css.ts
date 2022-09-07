export enum EColor {
    BLACK = '#060611',
    BLUE_GREY_100 = '#191F28',
    BLUE_GREY_90 = '#333D4B',
    BLUE_GREY_80 = '#4E5968',
    BLUE_GREY_70 = '#6B7684',
    BLUE_GREY_60 = '#8B95A1',
    BLUE_GREY_50 = '#D1D6DB',
    BLUE_GREY_40 = '#E5E8EB',
    BLUE_GREY_30 = '#F5F7FA',
    BLUE_GREY_20 = '#F9FAFC',
    BLUE_GREY_10 = '#FCFCFC',
    WHITE = '#FFFFFF',
    BLUE_DARK = '#2C60C6',
    BLUE_DEFAULT = '#3671E3',
    BLUE_LIGHT = '#5486E7',
    L_BLUE = '#EEF5FC',
    GREEN = '#009262',
    YELLOW = '#F3AC49',
    RED = '#D74C54',
}

export type Size = number | `${number}px` | `${number}%` | `${number}rem` | `${number}em` | 'fit-content';