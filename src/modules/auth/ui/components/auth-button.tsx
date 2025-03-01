"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'

type Props = {}

const AuthButton = (props: Props) => {
    return (
        <>
            <SignedIn>
                <UserButton />
                {/* TODO: add menu items for studio and user profile */}
            </SignedIn>
            <SignedOut>
                <SignInButton mode='modal'>
                    <Button variant={"outline"}
                        className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5'>
                        <UserCircleIcon />
                        Sign in
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    )
}

export default AuthButton