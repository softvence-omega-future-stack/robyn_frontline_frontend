'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Wrapper from '@/common/Wrapper';
import logo from "@/public/frontline.svg";
import { Button } from './ui/button';
import MobileMenu from './MobileNav';
import { scrollToSection } from './utils/scrollToSection ';

export type NavLink = {
    scrollTo: string;
    label: string;
};

const navLinks: NavLink[] = [
    { scrollTo: 'home', label: 'Home' },
    { scrollTo: 'services', label: 'Services' },
    { scrollTo: 'cases', label: 'Cases' },
    { scrollTo: 'about', label: 'About' },
    { scrollTo: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>('home');

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActive(id);
        }
    };

    // Update active item while scrolling
    useEffect(() => {
        const handleScrollPosition = () => {
            navLinks.forEach(link => {
                const section = document.getElementById(link.scrollTo);
                if (!section) return;

                const top = section.getBoundingClientRect().top;
                if (top <= 150 && top >= -section.offsetHeight + 150) {
                    setActive(link.scrollTo);
                }
            });
        };

        window.addEventListener("scroll", handleScrollPosition);
        return () => window.removeEventListener("scroll", handleScrollPosition);
    }, []);

    return (
        <header className="w-full border-b bg-white/50 backdrop-blur sticky top-0 z-40">
            <Wrapper>
                <div className="mx-auto flex items-center justify-between py-4">

                    {/* Logo */}
                    <Link href="/">
                        <Image src={logo} alt="logo" className="w-[121px] h-[45px]" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-6">
                        {navLinks.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => handleScroll(item.scrollTo)}
                                className={`
                                    px-3 py-2 text-base transition-colors relative group cursor-pointer
                                    ${active === item.scrollTo ? 'text-baseBg bg-orange-50 rounded px-2 py-1' : 'text-black hover:text-baseBg'}
                                `}
                            >
                                {item.label}

                                {/* Hover/Active underline */}
                                <span
                                    className={`
                                        pointer-events-none absolute left-0 bottom-0 h-0.5 w-full bg-baseBg 
                                        origin-right transition-transform duration-300 ease-out
                                        ${active === item.scrollTo ? 'scale-x-100 origin-left' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'}
                                    `}
                                />
                            </button>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            <Button onClick={() => scrollToSection("contact")} className="bg-baseBg hover:bg-orange-600 text-sm font-medium">
                                Request Case Review
                            </Button>
                        </div>

                        {/* Mobile button */}
                        <button className="md:hidden p-2" onClick={() => setOpen(true)}>
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    open={open}
                    onClose={() => setOpen(false)}
                    navLinks={navLinks}
                    active={active}
                    setActive={setActive}
                    handleScroll={handleScroll}
                />
            </Wrapper>
        </header>
    );
};

export default Navbar;
