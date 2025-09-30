"use client";

import { useState } from "react";
import { X, ExternalLink, Calendar, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  results: string;
  extraImages?: string[];
}

interface CaseModalProps {
  item: CarouselItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseModal = ({ item, isOpen, onClose }: CaseModalProps) => {
  if (!item || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="relative h-64 md:h-80">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-t-2xl" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
            <p className="text-lg opacity-90">{item.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-primary-red mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Desafio</h3>
                <p className="text-text-muted">{item.challenge}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary-red mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Solução</h3>
                <p className="text-text-muted">{item.solution}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-primary-red mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Resultados</h3>
                <p className="text-text-muted">{item.results}</p>
              </CardContent>
            </Card>
          </div>

          {/* Extra Images */}
          {item.extraImages && item.extraImages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Galeria de Projetos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {item.extraImages.map((img, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt={`Extra ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button variant="outline" onClick={onClose}>
              Fechar
            </Button>
            <Button className="bg-primary-red hover:bg-primary-red-dark">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Projeto Completo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseModal;