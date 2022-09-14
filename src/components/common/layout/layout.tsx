import React, { ReactNode } from 'react'
import classNames from 'classnames';

interface Layoutprops {
    children: ReactNode | ReactNode[];
}

export function Layout(props: Layoutprops) {
    const {
        children       
    } = props
    return (
        <>
            <div>머리</div>
            {children}
            <div>발</div>
        </>
    )
}
