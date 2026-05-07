"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as fabric from 'fabric';
import Toolbar from './Toolbar';

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeTool, setActiveTool] = useState('select');
  const [color, setColor] = useState('#8b5cf6');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: window.innerWidth - 300,
      height: window.innerHeight - 100,
      backgroundColor: '#1a1a1a',
    });

    setCanvas(fabricCanvas);

    const handleResize = () => {
      fabricCanvas.setDimensions({
        width: window.innerWidth - 300,
        height: window.innerHeight - 100,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      fabricCanvas.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;

    if (activeTool === 'draw') {
      canvas.isDrawingMode = true;
      if (!canvas.freeDrawingBrush) {
         canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      }
      canvas.freeDrawingBrush.width = brushSize;
      canvas.freeDrawingBrush.color = color;
    } else {
      canvas.isDrawingMode = false;
    }
  }, [canvas, activeTool, color, brushSize]);

  const addRect = useCallback(() => {
    if (!canvas) return;
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: color,
      width: 100,
      height: 100,
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
  }, [canvas, color]);

  const addCircle = useCallback(() => {
    if (!canvas) return;
    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      fill: color,
      radius: 50,
    });
    canvas.add(circle);
    canvas.setActiveObject(circle);
  }, [canvas, color]);

  const addText = useCallback(() => {
    if (!canvas) return;
    const text = new fabric.IText('Type here...', {
      left: 200,
      top: 200,
      fill: color,
      fontSize: 40,
    });
    canvas.add(text);
    canvas.setActiveObject(text);
  }, [canvas, color]);

  const deleteSelected = useCallback(() => {
    if (!canvas) return;
    const activeObjects = canvas.getActiveObjects();
    canvas.remove(...activeObjects);
    canvas.discardActiveObject();
    canvas.requestRenderAll();
  }, [canvas]);

  const clearCanvas = useCallback(() => {
    if (!canvas) return;
    canvas.clear();
    canvas.backgroundColor = '#1a1a1a';
    canvas.requestRenderAll();
  }, [canvas]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = async (f) => {
      const data = f.target?.result;
      if (typeof data !== 'string') return;

      const img = await fabric.FabricImage.fromURL(data);
      img.scaleToWidth(400);
      canvas.add(img);
      canvas.centerObject(img);
      canvas.setActiveObject(img);
    };
    reader.readAsDataURL(file);
  };

  const applyFilter = async (filterType: string) => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (activeObject instanceof fabric.FabricImage) {
      activeObject.filters = [];
      if (filterType === 'grayscale') {
        activeObject.filters.push(new fabric.filters.Grayscale());
      } else if (filterType === 'sepia') {
        activeObject.filters.push(new fabric.filters.Sepia());
      } else if (filterType === 'invert') {
        activeObject.filters.push(new fabric.filters.Invert());
      } else if (filterType === 'brightness') {
        activeObject.filters.push(new fabric.filters.Brightness({ brightness: 0.2 }));
      } else if (filterType === 'contrast') {
        activeObject.filters.push(new fabric.filters.Contrast({ contrast: 0.2 }));
      } else if (filterType === 'blur') {
        activeObject.filters.push(new fabric.filters.Blur({ blur: 0.1 }));
      }
      await activeObject.applyFilters();
      canvas.requestRenderAll();
    }
  };

  const download = (format: 'png' | 'jpeg' | 'svg') => {
    if (!canvas) return;
    let dataURL;
    if (format === 'svg') {
      dataURL = canvas.toSVG();
      const blob = new Blob([dataURL], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `mikmedia-export.svg`;
      link.click();
      return;
    } else {
      dataURL = canvas.toDataURL({
        format: format,
        quality: 1,
        multiplier: 1,
      });
    }
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `mikmedia-export.${format}`;
    link.click();
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      <Toolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        color={color}
        setColor={setColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        addRect={addRect}
        addCircle={addCircle}
        addText={addText}
        deleteSelected={deleteSelected}
        clearCanvas={clearCanvas}
        onUpload={handleImageUpload}
        applyFilter={applyFilter}
        download={download}
      />
      <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a0a]">
        <div className="relative shadow-2xl rounded-lg overflow-hidden border border-white/5">
           <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
}
