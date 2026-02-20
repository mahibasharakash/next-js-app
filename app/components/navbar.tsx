"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full sticky top-0 z-50 transition-colors duration-500 ${isScrolled ? "bg-gray-100 shadow-xl" : "bg-white shadow-none"}`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 w-full">
                <div className="w-auto inline-flex justify-start items-center">
                    <Link href="/" className="font-bold text-xl">
                        Brand
                    </Link>
                </div>
                <div className="w-auto inline-flex justify-end items-center gap-4">
                    <Link href="/about" className="text-sm text-gray-600 hover:text-black">
                        About
                    </Link>
                    <Link href="/services" className="text-sm text-gray-600 hover:text-black">
                        Services
                    </Link>
                    <Link href="/products" className="text-sm text-gray-600 hover:text-black">
                        Products
                    </Link>
                    <Link href="/blogs" className="text-sm text-gray-600 hover:text-black">
                        Blogs
                    </Link>
                    <Link href="/contact" className="text-sm text-gray-600 hover:text-black">
                        Contact
                    </Link>
                    <Link href="/user/order-history" className="text-sm text-gray-600 hover:text-black">
                        Orders
                    </Link>
                    <Link href="/user/wishlist-history" className="text-sm text-gray-600 hover:text-black">
                        Wishlist
                    </Link>
                    <Link href="/auth/login" className="text-sm text-gray-600 hover:text-black">
                        Login
                    </Link>
                    <Link href="/auth/registration" className="text-sm text-gray-600 hover:text-black">
                        Registration
                    </Link>
                </div>
            </div>
        </nav>
    );
}