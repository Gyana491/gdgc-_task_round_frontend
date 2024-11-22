import React from 'react';

interface FolderCardProps {
  backgroundColor: string;
  textColor?: string;
  children: React.ReactNode;
}

export function FolderCard({ backgroundColor, textColor = 'white', children }: FolderCardProps) {
  return (
    <div className="relative">
      {/* Folder Tab */}
      <div 
        className="absolute -top-3 right-0 h-6 w-48 rounded-tl-[2rem] rounded-tr-[1rem] z-10"
        style={{ backgroundColor }}
      />
      {/* Main Folder Body */}
      <div 
        className="relative h-full rounded-[1rem] rounded-tr-none p-8 aspect-square"
        style={{ backgroundColor, color: textColor }}
      >
        {children}
      </div>
    </div>
  );
}