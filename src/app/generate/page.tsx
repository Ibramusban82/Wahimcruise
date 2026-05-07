"use client";

import React, { useState } from 'react';
import { Sparkles, Download, Wand2, RefreshCw } from 'lucide-react';

const STYLES = [
  { id: 'photorealistic', name: 'Photorealistic', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop' },
  { id: 'digital-art', name: 'Digital Art', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop' },
  { id: '3d-render', name: '3D Render', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop' },
  { id: 'anime', name: 'Anime', image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=200&h=200&fit=crop' },
];

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('photorealistic');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const mockImages = [
        `https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80`,
        `https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80`,
        `https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80`,
        `https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80`
      ];
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          AI <span className="gradient-text">Magic</span> Studio
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          Transform your ideas into stunning visuals in seconds. Powered by mikmedia's proprietary ultra-HD generation engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-4">
            <label className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">
              Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to create..."
              className="w-full h-40 bg-card border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">
              Style
            </label>
            <div className="grid grid-cols-2 gap-3">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedStyle === style.id ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                    <span className="text-[10px] font-bold text-white uppercase">{style.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isGenerating ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Wand2 className="w-5 h-5" />
            )}
            {isGenerating ? 'Generating...' : 'Generate Images'}
          </button>
        </div>

        <div className="lg:col-span-2">
          {generatedImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {generatedImages.map((img, i) => (
                <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-card">
                  <img src={img} alt={`Generated ${i}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                      <Download className="w-6 h-6" />
                    </button>
                    <button className="p-3 bg-primary rounded-full hover:opacity-90 transition-opacity shadow-lg">
                      <Sparkles className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full min-h-[500px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-card/30">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-foreground/20" />
              </div>
              <h3 className="text-xl font-bold mb-2">No images generated yet</h3>
              <p className="text-foreground/40 max-w-sm">
                Enter a prompt and click generate to see the magic happen.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
