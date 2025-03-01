"use client"
import React from 'react'
import { FlameIcon, HomeIcon, PlaySquare } from 'lucide-react'
import {
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar'
import Link from 'next/link'

type Props = {}

const MainSection = (props: Props) => {
    const items = [
        {
            title: 'Home',
            url: '/',
            icon: HomeIcon
        },
        {
            title: 'Subscriptions',
            url: '/feed/subscriptions',
            icon: PlaySquare,
            auth: true
        },
        {
            title: 'Trending',
            url: '/feed/trending',
            icon: FlameIcon
        }
    ];
    
    return (
        <SidebarGroup>
            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}  //TODO: Change to look at current pathname
                                onClick={() => { }} //TODO: To-do something on click 
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

export default MainSection