'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 text-white py-5 px-6 flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">
        Hydropower Dashboard
      </Link>
      <div className="hidden md:flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/create-plant" className="hover:underline">Create Plant</Link>
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`absolute top-16 left-0 w-full bg-blue-600 text-white flex flex-col py-4 px-6 md:hidden mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" className="py-2" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/create-plant" className="py-2" onClick={() => setMenuOpen(false)}>Create Plant</Link>
      </div>
    </nav>
  );
}
