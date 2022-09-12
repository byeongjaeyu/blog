import { Size } from '@defines/css'
import React, { InputHTMLAttributes } from 'react'

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    width?: Size,
    height?: Size,
    fontSize?: Size,
    label?: string,
    disabled?: boolean,
}


export function Input(props: Inputprops) {
    return (
        <>
        </>
    )
}
