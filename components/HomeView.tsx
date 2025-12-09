import React from 'react';
import { AppMode, UserProgress } from '../types';
import { Feather, RefreshCw, Bookmark, ChevronRight, CheckCircle2, Circle } from 'lucide-react';

interface HomeViewProps {
  onModeSelect: (mode: AppMode) => void;
  progress: UserProgress;
  totalQuestions: number;
}

export const HomeView: React.FC<HomeViewProps> = ({ onModeSelect, progress, totalQuestions }) => {
  const answeredCount = Object.keys(progress.answered).length;
  const correctCount = Object.keys(progress.correct).filter(k => progress.correct[k]).length;
  const wrongCount = progress.wrongIds.length;
  // Calculate completion percentage instead of just count for visual
  const percentage = Math.round((answeredCount / totalQuestions) * 100) || 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="w-full max-w-sm space-y-10">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-block p-4 rounded-full bg-stone-100 mb-2">
             <div className="w-2 h-2 rounded-full bg-stone-400"></div>
          </div>
          <h1 className="text-3xl font-serif text-stone-800 tracking-tight">
            项目管理
          </h1>
          <p className="text-stone-400 text-xs font-serif tracking-[0.2em] uppercase">
            每日 · 精进 · 思考
          </p>
        </header>

        {/* Stats - Text based */}
        <div className="text-center py-6 border-t border-b border-stone-100">
            <div className="flex justify-center items-baseline space-x-1 text-stone-600 font-serif">
                <span className="text-4xl">{percentage}</span>
                <span className="text-sm">%</span>
            </div>
            <p className="text-xs text-stone-400 mt-2 tracking-widest uppercase">完成度</p>
            
            <div className="mt-4 flex justify-center gap-8 text-xs text-stone-400">
                <span>已练 {answeredCount}</span>
                <span>待修 {wrongCount}</span>
            </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
            {/* Single Choice */}
            <button 
                onClick={() => onModeSelect('PRACTICE_CHOICE')}
                className="w-full group bg-white hover:bg-stone-50 border border-transparent hover:border-stone-200 rounded-2xl p-4 flex items-center justify-between transition-all duration-500 shadow-sm hover:shadow-md"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-50 text-stone-600 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <CheckCircle2 size={18} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-stone-800 font-serif text-lg group-hover:translate-x-1 transition-transform duration-300">选择</h3>
                        <p className="text-stone-400 text-xs">单项选择练习</p>
                    </div>
                </div>
                <ChevronRight className="text-stone-300 w-4 h-4 group-hover:text-stone-500 transition-colors" />
            </button>

            {/* Judgment */}
            <button 
                onClick={() => onModeSelect('PRACTICE_JUDGMENT')}
                className="w-full group bg-white hover:bg-stone-50 border border-transparent hover:border-stone-200 rounded-2xl p-4 flex items-center justify-between transition-all duration-500 shadow-sm hover:shadow-md"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-50 text-stone-600 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <Circle size={18} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-stone-800 font-serif text-lg group-hover:translate-x-1 transition-transform duration-300">判断</h3>
                        <p className="text-stone-400 text-xs">真伪辨别练习</p>
                    </div>
                </div>
                <ChevronRight className="text-stone-300 w-4 h-4 group-hover:text-stone-500 transition-colors" />
            </button>

            {/* Flashcards */}
            <button 
                onClick={() => onModeSelect('FLASHCARDS')}
                className="w-full group bg-white hover:bg-stone-50 border border-transparent hover:border-stone-200 rounded-2xl p-4 flex items-center justify-between transition-all duration-500 shadow-sm hover:shadow-md"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-50 text-stone-600 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <Bookmark size={18} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-stone-800 font-serif text-lg group-hover:translate-x-1 transition-transform duration-300">卡片</h3>
                        <p className="text-stone-400 text-xs">知识碎片的整理</p>
                    </div>
                </div>
                <ChevronRight className="text-stone-300 w-4 h-4 group-hover:text-stone-500 transition-colors" />
            </button>

            {/* Review Errors */}
            <button 
                onClick={() => onModeSelect('REVIEW_ERRORS')}
                disabled={wrongCount === 0}
                className={`w-full group bg-white hover:bg-stone-50 border border-transparent hover:border-stone-200 rounded-2xl p-4 flex items-center justify-between transition-all duration-500 shadow-sm hover:shadow-md ${wrongCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-50 text-stone-600 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <RefreshCw size={18} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-stone-800 font-serif text-lg group-hover:translate-x-1 transition-transform duration-300">拾遗</h3>
                        <p className="text-stone-400 text-xs">温故知新 ({wrongCount})</p>
                    </div>
                </div>
                <ChevronRight className="text-stone-300 w-4 h-4 group-hover:text-stone-500 transition-colors" />
            </button>
        </nav>

        <footer className="pt-6 text-center">
             <div className="w-16 h-[1px] bg-stone-200 mx-auto"></div>
        </footer>
      </div>
    </div>
  );
};
