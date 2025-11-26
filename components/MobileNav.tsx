'use client'

import { NavLink } from './Navbar';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    navLinks: NavLink[];
    active: string;
    setActive: (v: string) => void;
    handleScroll: (id: string) => void;
}

const MobileMenu = ({
    open,
    onClose,
    navLinks,
    active,
    setActive,
    handleScroll
}: MobileMenuProps) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Menu Sidebar */}
            <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                    <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-600"
                    >
                        ✕
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col h-full bg-white">
                    <div className="flex-1 space-y-3 p-6 bg-white">
                        {navLinks.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleScroll(item.scrollTo);
                                    setActive(item.scrollTo);
                                    onClose();
                                }}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${active === item.scrollTo
                                        ? "bg-orange-50 text-orange-600 font-semibold border border-orange-200"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="p-6 border-t border-gray-200 bg-white">
                        <button
                            onClick={() => {
                                handleScroll("contact");
                                setActive("contact");
                                onClose();
                            }}
                            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200"
                        >
                            Request Case
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;