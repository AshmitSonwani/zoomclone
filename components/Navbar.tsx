"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import MobileNav from './mobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from '@/constants'
import { SignedIn, UserButton } from '@clerk/nextjs'
import MobileNav from './MobileNav'

const Navbar = () => {
    const pathname = usePathname();
    return (

        <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src="/icons/logo.svg"
                    width={32}
                    height={32}
                    alt='Sono Logo'
                    className='max-sm:size-10'
                />
                <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Ashmit</p>

            </Link>
            <div className='flex-between gap-5'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar
