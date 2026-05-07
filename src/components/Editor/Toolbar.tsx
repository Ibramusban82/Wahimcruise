"use client";

import React from 'react';
import {
  MousePointer2,
  Pencil,
  Square,
  Circle as CircleIcon,
  Type,
  Trash2,
  RotateCcw,
  Download,
  Upload,
  Image as ImageIcon,
  Zap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ToolbarProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  color: string;
  setColor: (color: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  addRect: () => void;
  addCircle: () => void;
  addText: () => void;
  deleteSelected: () => void;
  clearCanvas: () => void;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  applyFilter: (filter: string) => void;
  download: (format: 'png' | 'jpeg' | 'svg') => void;
}

export default function Toolbar({
  activeTool,
  setActiveTool,
  color,
  setColor,
  brushSize,
  setBrushSize,
  addRect,
  addCircle,
  addText,
  deleteSelected,
  clearCanvas,
  onUpload,
  applyFilter,
  download
}: ToolbarProps) {
  return (
    <div className="h-16 border-b border-border bg-card flex items-center px-6 justify-between gap-4">
      <div className="flex items-center gap-2">
        <ToolButton
          icon={MousePointer2}
          active={activeTool === 'select'}
          onClick={() => setActiveTool('select')}
          label="Select"
        />
        <ToolButton
          icon={Pencil}
          active={activeTool === 'draw'}
          onClick={() => setActiveTool('draw')}
          label="Draw"
        />
        <div className="w-px h-6 bg-border mx-2" />
        <ToolButton icon={Square} onClick={addRect} label="Rectangle" />
        <ToolButton icon={CircleIcon} onClick={addCircle} label="Circle" />
        <ToolButton icon={Type} onClick={addText} label="Text" />
        <div className="w-px h-6 bg-border mx-2" />

        <label className="cursor-pointer">
          <input type="file" className="hidden" accept="image/*" onChange={onUpload} />
          <div className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/5 transition-all">
            <Upload className="w-5 h-5" />
          </div>
        </label>
      </div>

      <div className="flex items-center gap-4">
        {activeTool === 'draw' && (
          <div className="flex items-center gap-3 mr-4">
            <span className="text-xs font-medium text-foreground/40 uppercase">Size</span>
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              className="w-24 accent-primary"
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-foreground/40 uppercase">Color</span>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded-full overflow-hidden border-none cursor-pointer bg-transparent"
          />
        </div>

        <div className="w-px h-6 bg-border mx-2" />

        <div className="flex items-center gap-1">
          <button
            onClick={() => applyFilter('grayscale')}
            className="px-2 py-1.5 text-xs font-medium rounded-md hover:bg-white/5 text-foreground/70"
          >
            Grayscale
          </button>
          <button
            onClick={() => applyFilter('sepia')}
            className="px-2 py-1.5 text-xs font-medium rounded-md hover:bg-white/5 text-foreground/70"
          >
            Sepia
          </button>
          <button
            onClick={() => applyFilter('brightness')}
            className="px-2 py-1.5 text-xs font-medium rounded-md hover:bg-white/5 text-foreground/70"
          >
            Bright
          </button>
          <button
            onClick={() => applyFilter('blur')}
            className="px-2 py-1.5 text-xs font-medium rounded-md hover:bg-white/5 text-foreground/70"
          >
            Blur
          </button>
        </div>

        <div className="w-px h-6 bg-border mx-2" />

        <div className="flex items-center gap-2">
          <ToolButton icon={Trash2} onClick={deleteSelected} label="Delete" className="text-red-400 hover:text-red-300" />
          <ToolButton icon={RotateCcw} onClick={clearCanvas} label="Reset" />
        </div>

        <div className="flex items-center gap-1 ml-4">
           <button
            onClick={() => download('png')}
            className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

function ToolButton({
  icon: Icon,
  active,
  onClick,
  label,
  className
}: {
  icon: any,
  active?: boolean,
  onClick: () => void,
  label: string,
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={cn(
        "p-2 rounded-lg transition-all duration-200",
        active
          ? "bg-primary/20 text-primary ring-1 ring-primary/30"
          : "text-foreground/60 hover:text-foreground hover:bg-white/5",
        className
      )}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
