import React from 'react'
import { HomeLayout } from '@/modules/home/ui/layouts/home-layout';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default Layout