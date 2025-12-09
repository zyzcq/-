import React, { useState } from 'react';
import { Question } from '../types';
import { ChevronLeft, ChevronRight, X, RotateCw } from 'lucide-react';

interface FlashcardViewProps {
  questions: Question[];
  onExit: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({ questions, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = questions[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev + 1) % questions.length), 300);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length), 300);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto w-full relative overflow-hidden bg-[#fafaf9]">
      {/* Header */}
      <div className="p-8 flex justify-between items-center z-10">
        <button onClick={onExit} className="text-stone-400 hover:text-stone-600 transition-colors">
            <X size={24} strokeWidth={1} />
        </button>
        <span className="font-serif text-stone-400 text-sm tracking-widest">
            {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Card Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 perspective-1000">
        <div 
            className="relative w-full max-w-md aspect-[3/4] max-h-[500px] cursor-pointer group perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full duration-700 preserve-3d transition-all transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-[0_20px_40px_-10px_rgba(68,64,60,0.1)] border border-stone-100 p-10 flex flex-col items-center justify-center text-center">
                     <div className="absolute top-0 left-0 w-full h-1 bg-stone-100"></div>
                     
                     <div className="flex-1 flex flex-col justify-center items-center">
                        <span className="mb-8 text-stone-300 text-xs font-serif uppercase tracking-widest">Question</span>
                        <h3 className="text-2xl font-serif text-stone-800 leading-normal">
                            {currentCard.question}
                        </h3>
                     </div>
                     
                     <div className="mt-8 text-stone-300">
                        <RotateCw size={16} strokeWidth={1.5} />
                     </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#f5f5f4] rounded-xl shadow-[0_20px_40px_-10px_rgba(68,64,60,0.15)] border border-stone-200 p-10 flex flex-col text-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-stone-200"></div>

                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <span className="block text-stone-400 text-xs font-serif uppercase tracking-widest mb-2">Memory Key</span>
                            <h2 className="text-3xl font-serif text-stone-800">
                                {currentCard.mnemonic}
                            </h2>
                        </div>
                        
                        <div className="w-8 h-[1px] bg-stone-300 mb-8"></div>

                        <div>
                            <p className="text-base text-stone-600 font-light leading-relaxed">
                                {currentCard.explanation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-12 flex justify-center items-center gap-12">
            <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-all"
            >
                <ChevronLeft size={24} strokeWidth={1} />
            </button>
            
            <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                className="text-stone-400 text-xs font-serif uppercase tracking-widest hover:text-stone-600 transition-colors"
            >
                Flip Card
            </button>
            
            <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-all"
            >
                <ChevronRight size={24} strokeWidth={1} />
            </button>
      </div>
    </div>
  );
};