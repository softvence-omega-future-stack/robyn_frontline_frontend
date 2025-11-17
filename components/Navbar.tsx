'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Wrapper from '@/common/Wrapper';
import logo from "@/public/frontline.svg";
import { usePathname } from 'next/navigation';

export type NavLink = {
    href: string;
    label: string;
};


const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case', label: 'Cases' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (href: string) => pathname?.startsWith(href);

    return (
        <header className="w-full border-b bg-white/50 backdrop-blur sticky top-0 z-40">
            <Wrapper>
                <div className="mx-auto flex items-center justify-between py-4">
                    {/* Start: Logo */}
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <div className="flex items-center gap-2 w-[121px] h-[45px]">
                                <Image className='w-[121px] h-[45px]' src={logo} alt="logo" />
                            </div>
                        </Link>
                    </div>


                    <nav className="hidden md:flex gap-6">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`
                                     relative px-2 md:px-3 ml-2 py-2 text-sm sm:text-base transition-colors whitespace-nowrap group
                                        ${isActive(l.href)
                                        ? "text-baseBg bg-orange-50 rounded font-medium"
                                        : "text-black hover:text-baseBg"
                                    }
                            `}
                            >
                                {l.label}

                                {/* Hover underline animation */}
                                <span
                                    className="
                  pointer-events-none absolute left-0 bottom-0 h-0.5 w-full bg-baseBg
                  origin-right scale-x-0 transition-transform duration-300 ease-out
                  group-hover:scale-x-100 group-hover:origin-left
                "
                                />

                                {/* Active bottom border */}
                                {isActive(l.href) && (
                                    <span
                                        className="
                      pointer-events-none absolute left-0 bottom-0 h-0.5 w-full bg-baseBg
                    "
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>



                    {/* End: Request Case button + mobile menu trigger */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            <Button className='bg-baseBg hover:bg-orange-600 text-sm md:text-base font-medium' asChild>
                                <Link href="/contact">Request Case Review</Link>
                            </Button>
                        </div>


                        <button
                            className="md:hidden p-2"
                            aria-label="open menu"
                            onClick={() => setOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>


                <MobileNav open={open} onClose={() => setOpen(false)} navLinks={navLinks} />
            </Wrapper>
        </header>
    )
}

export default Navbar;