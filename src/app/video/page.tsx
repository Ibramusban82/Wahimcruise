"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Scissors,
  Type,
  Music,
  Plus,
  Video as VideoIcon,
  Layers,
  Settings2
} from 'lucide-react';

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(40);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.1));
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
    } else if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Top Header */}
      <div className="h-14 border-b border-border px-6 flex items-center justify-between bg-card">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold bg-white/5 px-3 py-1 rounded-md border border-border">
            Project: Cinematic_Edit_01
          </span>
          <span className="text-xs text-foreground/40 font-mono">1080p | 30fps | 00:04:12</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
            Preview
          </button>
          <button className="px-4 py-1.5 text-sm font-bold bg-primary rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            Export Video
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Assets Panel */}
        <div className="w-72 border-r border-border bg-card/50 flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">Assets</span>
            <button className="p-1.5 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            <div className="aspect-video bg-white/5 rounded-lg border border-border flex flex-col items-center justify-center p-4 text-center group cursor-pointer hover:border-primary/50 transition-colors">
              <VideoIcon className="w-6 h-6 text-foreground/20 mb-2 group-hover:text-primary transition-colors" />
              <span className="text-xs font-medium text-foreground/40 group-hover:text-foreground">Import Video</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-lg border border-border relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-medium text-white truncate">Scene_0{i}.mp4</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Preview Area */}
        <div className="flex-1 bg-[#0a0a0a] flex flex-col relative">
          <div className="flex-1 flex items-center justify-center p-12">
            <div className="aspect-video w-full max-w-4xl bg-card rounded-xl border border-white/5 shadow-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-current ml-1" />}
              </button>
            </div>
          </div>

          {/* Player Controls */}
          <div className="h-16 border-t border-border bg-card flex items-center px-8 justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button className="text-foreground/60 hover:text-foreground transition-colors"><SkipBack className="w-5 h-5" /></button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                </button>
                <button className="text-foreground/60 hover:text-foreground transition-colors"><SkipForward className="w-5 h-5" /></button>
              </div>
              <div className="text-sm font-mono tracking-wider">
                <span className="text-foreground">00:01:42</span>
                <span className="text-foreground/40 mx-1">/</span>
                <span className="text-foreground/40">00:04:12</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-foreground/60" />
                <div className="w-24 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-2/3 bg-primary rounded-full" />
                </div>
              </div>
              <div className="w-px h-6 bg-border" />
              <button className="text-foreground/60 hover:text-foreground transition-colors"><Settings2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-64 border-t border-border bg-card/80 backdrop-blur-md flex flex-col">
        <div className="h-10 border-b border-border px-6 flex items-center justify-between bg-card/50">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-xs font-bold text-foreground/60 hover:text-foreground">
              <Scissors className="w-3.5 h-3.5" /> Split
            </button>
            <button className="flex items-center gap-2 text-xs font-bold text-foreground/60 hover:text-foreground">
              <Type className="w-3.5 h-3.5" /> Text
            </button>
            <button className="flex items-center gap-2 text-xs font-bold text-foreground/60 hover:text-foreground">
              <Music className="w-3.5 h-3.5" /> Audio
            </button>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-48 h-1 bg-white/5 rounded-full relative">
               <div className="absolute inset-y-0 left-0 w-1/4 bg-foreground/20 rounded-full" />
             </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto relative">
          <div className="flex h-full min-w-full relative">
            {/* Timeline Ruler */}
            <div className="absolute top-0 inset-x-0 h-6 border-b border-border bg-white/[0.02] flex items-center">
              {Array.from({length: 20}).map((_, i) => (
                <div key={i} className="flex-1 border-l border-border h-2 flex items-end px-1">
                  <span className="text-[8px] text-foreground/30 font-mono">00:0{i}:00</span>
                </div>
              ))}
            </div>

            {/* Playhead */}
            <div
              className="absolute top-0 bottom-0 w-px bg-primary z-10 shadow-[0_0_8px_rgba(139,92,246,1)]"
              style={{ left: `${progress}%` }}
            >
              <div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-primary" />
            </div>

            {/* Tracks */}
            <div className="w-full mt-8 p-4 space-y-2">
              <div className="h-12 bg-primary/20 rounded-lg border border-primary/30 w-3/4 relative flex items-center px-4 overflow-hidden">
                <span className="text-[10px] font-bold text-primary uppercase">Video Track 1</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              <div className="h-12 bg-secondary/20 rounded-lg border border-secondary/30 w-1/2 relative flex items-center px-4 overflow-hidden">
                <span className="text-[10px] font-bold text-secondary uppercase">Text Overlay</span>
              </div>
              <div className="h-8 bg-accent/20 rounded-lg border border-accent/30 w-full relative flex items-center px-4 overflow-hidden">
                <span className="text-[10px] font-bold text-accent uppercase">Background Score.mp3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
