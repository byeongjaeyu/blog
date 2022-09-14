import React, { ReactNode } from 'react'
import { Header } from './components/header/header';

interface Layoutprops {
    children: ReactNode | ReactNode[];
}

export function Layout(props: Layoutprops) {
    const { children } = props
    return (
        <>
            <Header/>
            <div>옆구리</div>
            {children}
            <div>발</div>
        </>
    )
}
