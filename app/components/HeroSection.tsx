import { Play, ArrowUpRight } from 'lucide-react';
import { FolderCard } from './FolderCard';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* Updated Hero Content */}
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h1 className="text-7xl font-bold leading-tight">
            UNLIMITED
            <br />
            PRETENTIOUS
            <br />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-12 h-12 rounded-full border-2 border-black" alt="Team member 1" />
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" className="w-12 h-12 rounded-full border-2 border-black" alt="Team member 2" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" className="w-12 h-12 rounded-full border-2 border-black" alt="Team member 3" />
              </div>
              IDEAS
            </div>
          </h1>
          
          <div className="mt-12">
            <h3 className="text-xl mb-2">OUR SOLUTIONS</h3>
            <p className="text-xl text-gray-400">WE PROVIDE THE FULL<br />FUNNEL APPROACH</p>
          </div>

          <div className="mt-8 space-y-4">
            <button className="flex items-center gap-4 hover:bg-white/5 p-4 rounded-full">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Play size={20} />
              </div>
              <div className="text-left">
                <div>Let's See</div>
                <div className="text-gray-400">How We Did It</div>
              </div>
            </button>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <span className="px-6 py-2 rounded-full border border-white/20">WEB ANALYTICS</span>
            <span className="px-6 py-2 rounded-full border border-white/20">EMAIL MARKETING</span>
            <span className="px-6 py-2 rounded-full border border-white/20">SEO 2.0</span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#B4A1D3] rounded-[2rem] rounded-tl-[0rem] p-8 aspect-[4/3]">
          {/* Folder Tab */}
            <div 
                className="absolute -top-5 left-0 h-12 w-5/6 rounded-tl-[2rem] rounded-tr-[4rem]  z-10 bg-[#B4A1D3]"
            />
            <div className="absolute flex gap-2 flex-row right-10 -top-4 ">
                <div className="w-2 h-2 bg-black border border-white rounded-full"></div>
                <div className="w-2 h-2 bg-white border border-white rounded-full"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-black text-lg">YOUR</div>
                <div className="text-black text-lg font-bold">BUSINESS</div>
                <div className="text-black text-lg">BOOST</div>
              </div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" 
              alt="Business Woman"
              className="w-full h-[70%] object-cover mt-4 rounded-xl"
            />
            <button className="mt-4 w-full bg-black/10 hover:bg-black/20 text-black rounded-full py-3 px-6 flex items-center justify-between">
              Book Demo Call
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>

        {/* Cards Section */}
        <div className="container mx-auto px-6 mt-20 grid grid-cols-3 gap-8">
        <FolderCard backgroundColor="#FF5C1B">
          <div className="flex flex-col h-full">
            <div className="text-2xl mb-4">UNIQUE<br />BUSINESS SOLUTIONS</div>
            <div className="mt-auto text-6xl">⚊</div>
          </div>
        </FolderCard>

        <FolderCard backgroundColor="#E6E6E6" textColor="black">
          <div className="flex justify-between">
            <div className="text-2xl">OUR CASE<br />STUDIES</div>
            <ArrowUpRight size={24} />
          </div>
        </FolderCard>

        <FolderCard backgroundColor="#FFB800" textColor="black">
          <div className="text-2xl mb-4">SUCCESSFUL<br />PROJECTS</div>
          <div className="text-8xl font-bold">700<sup>+</sup></div>
        </FolderCard>
    </div>

    </div>
  );
};

export default HeroSection; 