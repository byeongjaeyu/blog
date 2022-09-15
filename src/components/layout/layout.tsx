import React, { ReactNode } from 'react'
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

interface Layoutprops {
    children: ReactNode | ReactNode[];
}

export function Layout(props: Layoutprops) {
    const { children } = props
    return (
        <>
            <Header/>
            <Sidebar/>
            {children}
            <Footer/>
        </>
    )
}
