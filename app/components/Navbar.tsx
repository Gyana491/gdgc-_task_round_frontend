import { ArrowUpRight } from 'lucide-react';


export function Navbar() {
    return (
      <nav className="container mx-auto px-6 py-4 flex  bg-black text-white justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#00FF9D] text-2xl font-bold">C</span>
          <span className="text-white text-2xl font-bold">OUCHER</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#services" className="hover:text-gray-300">SERVICES</a>
          <a href="#about" className="hover:text-gray-300">ABOUT US</a>
          <a href="#cases" className="hover:text-gray-300">CASES</a>
          <button className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full hover:bg-white/20">
            SIGN UP <ArrowUpRight size={20} />
          </button>
        </div>
      </nav>
    );
  }