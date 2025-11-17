'use client'
import Link from 'next/link';
import { NavLink } from './Navbar';
// import logo from "@/public/frontline.svg";

interface NavLinkProps {
    open : boolean
    onClose : () => void
    navLinks : NavLink[]
}
const MobileNav = ({ open, onClose, navLinks }: NavLinkProps) => {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
            <aside className="absolute right-0 top-0 w-72 h-full bg-white p-6" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="mb-6">Close</button>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((l) => (
                        <Link key={l.href} href={l.href} onClick={onClose} className="py-2">
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-6">
                    <Link href="/contact" className="block py-2 text-center bg-orange-500 text-white rounded">Request Case</Link>
                </div>
            </aside>
        </div>
    )
}

export default MobileNav;