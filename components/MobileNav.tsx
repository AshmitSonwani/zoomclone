import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                    <SheetTrigger asChild>
                        <Image
                            src='/icons/hamburger.svg'
                            alt="hamburger icon"
                            width={36}
                            height={36}
                            className='cursor-pointer sm:hidden'
                        />

                    </SheetTrigger>
                    <SheetContent side='left' className='border-none bg-dark-1'>
                        <Link href='/' className='flex items-center gap-1'>
                            <Image
                                src="/icons/logo.svg"
                                width={32}
                                height={32}
                                alt='Sono Logo'
                                className='max-sm:size-10'
                            />
                            <p className='text-[26px] font-extrabold text-white'>Ashmit</p>

                        </Link>
                        <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                            <SheetClose asChild>
                                <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                                    {sidebarLinks.map((link) => {
                                        const isActive = pathname === link.route; // this line is making problem

                                        return (
                                            <SheetClose asChild key={link.route}>
                                            <Link href={link.route} key={link.label}
                                                className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-blue-1': isActive, })}
                                            >
                                                <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                                                <p>
                                                    {link.label}
                                                </p>
                                            </Link>
                                            </SheetClose>
                                        )

                                    })}
                                </section>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
        </section>
    )
}

export default MobileNav
