"use client";

import React from 'react';
import { Layers, Image as ImageIcon, Video as VideoIcon, FileText, Search, Grid, List, MoreVertical } from 'lucide-react';

export default function AssetsPage() {
  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Cloud <span className="gradient-text">Assets</span></h1>
          <p className="text-foreground/40 text-sm">Manage all your generated and uploaded media in one place.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              placeholder="Search assets..."
              className="bg-card border border-border rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none w-64"
            />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
            Upload New
          </button>
        </div>
      </div>

      <div className="flex gap-8 flex-1 overflow-hidden">
        <div className="w-48 space-y-2">
          <FilterButton icon={Layers} label="All Assets" active />
          <FilterButton icon={ImageIcon} label="Images" />
          <FilterButton icon={VideoIcon} label="Videos" />
          <FilterButton icon={FileText} label="Templates" />
        </div>

        <div className="flex-1 overflow-y-auto pr-4">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Recent Files</span>
            <div className="flex items-center gap-2">
              <button className="p-1.5 bg-white/5 rounded-md hover:bg-white/10 text-foreground/60"><Grid className="w-4 h-4" /></button>
              <button className="p-1.5 rounded-md text-foreground/40"><List className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
                <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity flex items-center justify-center">
                     <button className="px-3 py-1 bg-white text-black rounded-lg text-xs font-bold">Open</button>
                   </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium truncate w-32">Project_Draft_0{i+1}</p>
                    <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-tighter">Modified 2h ago</p>
                  </div>
                  <button className="text-foreground/40 hover:text-foreground transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
      active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
    }`}>
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
