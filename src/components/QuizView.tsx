import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import { X, ArrowRight, CornerUpLeft } from 'lucide-react';

interface QuizViewProps {
  questions: Question[];
  onAnswer: (id: string, isCorrect: boolean) => void;
  onExit: () => void;
  isReviewMode?: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({ questions, onAnswer, onExit, isReviewMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setRandomizedQuestions(questions);
  }, [questions]);

  const currentQuestion = randomizedQuestions[currentIndex];
  
  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-8 text-center bg-[#fafaf9] animate-[fadeIn_0.8s_ease-out]">
        <h2 className="text-3xl font-serif text-stone-800 mb-4">练习结束</h2>
        <p className="text-stone-500 mb-12 font-light">休息一下，沉淀知识。</p>
        <button 
          onClick={onExit}
          className="px-8 py-3 bg-stone-800 text-stone-50 rounded-full hover:bg-stone-700 transition-all duration-500 shadow-lg shadow-stone-200"
        >
          返回首页
        </button>
      </div>
    );
  }

  const handleOptionSelect = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;

    let isCorrect = false;
    const correctRaw = currentQuestion.correctAnswer.trim().toUpperCase();
    const selectedLetter = selectedOption.split('、')[0].trim().toUpperCase();

    if (currentQuestion.type === QuestionType.JUDGMENT) {
        if (['正确', '错误'].includes(correctRaw)) {
            isCorrect = selectedOption.includes(correctRaw);
        } else {
             isCorrect = selectedLetter === correctRaw;
        }
    } else {
        isCorrect = selectedLetter === correctRaw;
    }

    onAnswer(currentQuestion.id, isCorrect);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentIndex(prev => prev + 1);
  };

  let displayOptions: string[] = [];
  if (currentQuestion.options && currentQuestion.options.length > 0) {
    displayOptions = currentQuestion.options;
  } else if (currentQuestion.type === QuestionType.JUDGMENT) {
    displayOptions = ['A、正确', 'B、错误'];
  }

  const progressPercent = ((currentIndex + 1) / randomizedQuestions.length) * 100;

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto w-full relative bg-[#fafaf9]">
      {/* Header */}
      <div className="p-8 pt-10 flex justify-between items-end">
        <button onClick={onExit} className="text-stone-400 hover:text-stone-600 transition-colors">
            <CornerUpLeft size={20} strokeWidth={1.5} />
        </button>
        <div className="flex flex-col items-end">
            <span className="text-xs font-serif text-stone-400 tracking-widest uppercase mb-1">
                {isReviewMode ? '拾遗模式' : '进度'}
            </span>
            <div className="flex items-baseline font-serif text-stone-300 text-sm">
                <span className="text-stone-800 text-xl mr-1">{currentIndex + 1}</span> / {randomizedQuestions.length}
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 pb-32">
        <div className="mb-12 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <style>{`
                @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
            <div className="inline-block px-3 py-1 bg-stone-100 rounded-full text-[10px] text-stone-500 mb-6 tracking-wide uppercase">
                {currentQuestion.category}
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-stone-800 leading-relaxed font-normal">
                {currentQuestion.question}
            </h3>
        </div>

        <div className="space-y-4">
            {displayOptions.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                let containerClass = "w-full text-left p-5 rounded-xl transition-all duration-500 border ";
                let textClass = "font-light text-stone-600";

                if (showResult) {
                     const optLetter = opt.split('、')[0].trim().toUpperCase();
                     const correctLetter = currentQuestion.correctAnswer.trim().toUpperCase();
                     const isThisCorrect = opt.includes(currentQuestion.correctAnswer) || optLetter === correctLetter;
                     
                     if (isThisCorrect) {
                         containerClass += "bg-[#f0fdf4] border-[#dcfce7] shadow-sm"; // green-50/100
                         textClass = "text-[#15803d] font-normal";
                     } else if (isSelected && !isThisCorrect) {
                         containerClass += "bg-[#fef2f2] border-[#fee2e2]"; // red-50/100
                         textClass = "text-[#b91c1c]";
                     } else {
                         containerClass += "bg-transparent border-transparent opacity-40";
                     }
                } else {
                    if (isSelected) {
                        containerClass += "bg-white border-stone-200 shadow-md transform scale-[1.01]";
                        textClass = "text-stone-800 font-normal";
                    } else {
                        containerClass += "bg-transparent border-transparent hover:bg-white hover:shadow-sm";
                    }
                }

                return (
                    <button 
                        key={idx} 
                        onClick={() => handleOptionSelect(opt)}
                        disabled={showResult}
                        className={containerClass}
                    >
                        <div className="flex">
                            <span className={`w-8 ${isSelected || showResult ? textClass : 'text-stone-300'}`}>{opt.substring(0, 1)}</span>
                            <span className={`flex-1 ${textClass}`}>{opt.substring(2)}</span>
                        </div>
                    </button>
                );
            })}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-8 z-30 pointer-events-none flex justify-center">
        <div className="max-w-2xl w-full pointer-events-auto">
            {!showResult ? (
                <button 
                    onClick={checkAnswer}
                    disabled={!selectedOption}
                    className={`w-full py-4 rounded-full font-serif text-lg tracking-wide transition-all duration-500 shadow-xl ${
                        selectedOption 
                        ? 'bg-stone-800 text-stone-50 hover:bg-stone-700 transform translate-y-0 opacity-100' 
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed transform translate-y-4 opacity-0'
                    }`}
                >
                    确认
                </button>
            ) : (
                <div className="bg-white p-2 pl-6 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-between animate-[slideUp_0.4s_ease-out] border border-stone-100">
                     <style>{`
                        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                    `}</style>
                    <div className="text-sm font-serif">
                        {selectedOption && (selectedOption.includes(currentQuestion.correctAnswer) || selectedOption.startsWith(currentQuestion.correctAnswer)) 
                            ? <span className="text-stone-600">回答正确</span>
                            : <span className="text-red-400">正确答案: <span className="text-stone-800">{currentQuestion.correctAnswer}</span></span>
                        }
                    </div>
                    <button 
                        onClick={nextQuestion}
                        className="w-12 h-12 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-stone-700 transition-colors"
                    >
                        <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};