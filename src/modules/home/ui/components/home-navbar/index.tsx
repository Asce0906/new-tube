import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './search-input'
import AuthButton from '@/modules/auth/ui/components/auth-button'
import { SidebarTrigger } from '@/components/ui/sidebar'

type Props = {}

const HomeNavbar = (props: Props) => {
    return (
        <nav className='fixed top-0 right-0 left-0 h-16 bg-whiteflex items-center px-2 pr-5 z-50'>
            <div className='flex items-center gap-4 w-full'>

                {/* Menu and logo */}
                <div className='flex items-center flex-shrink-0'>
                    <SidebarTrigger />
                    <Link href={"/"}>
                        <div className='p-4 flex items-center gap-1'>
                            <Image
                                src="/logo.svg"
                                alt='logo'
                                width={32}
                                height={32}
                                className=''
                            />
                            <p className='font-xl font-semibold tracking-tight'>YouTube</p>
                        </div>
                    </Link>
                </div>

                {/* SearchBar */}
                <div className='flex flex-1 justify-center max-w-[720px] mx-auto'>
                    <SearchInput />
                </div>

                {/* Auth Button */}
                <div className='flex-shrink-0 items-center flex gap-4'>
                    <AuthButton />
                </div>

            </div>
        </nav>
    )
}

export default HomeNavbar