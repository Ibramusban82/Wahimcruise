"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Palette,
  Sparkles,
  Video,
  Layers,
  Settings,
  HelpCircle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const videoIcon = Video; // Alias because of naming conflict with icon name

const navItems = [
  { name: 'Studio', icon: Palette, href: '/studio' },
  { name: 'Generate', icon: Sparkles, href: '/generate' },
  { name: 'Video', icon: videoIcon, href: '/video' },
  { name: 'Assets', icon: Layers, href: '/assets' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full border-r border-border bg-card flex flex-col z-50">
      <div className="p-6">
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold gradient-text tracking-tighter group-hover:opacity-80 transition-opacity">
            mikmedia
          </h1>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-foreground/60 hover:text-foreground hover:bg-white/5"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-primary" : "text-foreground/40 group-hover:text-foreground"
              )} />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-border">
        <div className="space-y-1">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-foreground/60 hover:text-foreground transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-foreground/60 hover:text-foreground transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Support</span>
          </button>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Pro Plan</p>
          <p className="text-sm text-foreground/80 mb-3">Unlock advanced AI & 4K exports</p>
          <button className="w-full py-2 bg-foreground text-background text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
