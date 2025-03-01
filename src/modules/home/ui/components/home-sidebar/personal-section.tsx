"use client"
import React from 'react'
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react'
import { useAuth, useClerk } from "@clerk/nextjs"
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar'
import Link from 'next/link'

type Props = {}

const PersonalSection = (props: Props) => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();

    const items = [
        {
            title: 'History',
            url: '/playlists/history',
            icon: HistoryIcon,
            auth: true
        },
        {
            title: 'Liked Videos',
            url: '/playlists/liked',
            icon: ThumbsUpIcon,
            auth: true
        },
        {
            title: 'All Playlists',
            url: '/playlists',
            icon: ListVideoIcon,
            auth: true
        }
    ];

    return (
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}  //TODO: Change to look at current pathname
                                onClick={(e) => {
                                    if (!isSignedIn && item.auth) {
                                        e.preventDefault();
                                        return clerk.openSignIn();
                                    }
                                }}
                            >
                                <Link href={item.url} className='flex items-center gap-4'>
                                    <item.icon />
                                    <span className='text-sm'>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
    )
}

export default PersonalSection