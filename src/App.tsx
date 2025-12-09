import React, { useState, useMemo } from 'react';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { FlashcardView } from './components/FlashcardView';
import { questions } from './data/questions';
import { useProgress } from './hooks/useProgress';
import { AppMode, Question, QuestionType } from './types';

function App() {
  const [mode, setMode] = useState<AppMode>('HOME');
  const { progress, recordAnswer } = useProgress();

  // Filter questions based on mode
  const activeQuestions = useMemo(() => {
    switch (mode) {
      case 'FLASHCARDS':
        return questions.filter(q => q.type === QuestionType.SHORT_ANSWER);
      case 'REVIEW_ERRORS':
        return questions.filter(q => progress.wrongIds.includes(q.id));
      case 'PRACTICE_CHOICE':
        return questions.filter(q => q.type === QuestionType.SINGLE_CHOICE);
      case 'PRACTICE_JUDGMENT':
        return questions.filter(q => q.type === QuestionType.JUDGMENT);
      case 'PRACTICE_ALL':
        return questions.filter(q => q.type !== QuestionType.SHORT_ANSWER);
      default:
        return [];
    }
  }, [mode, progress.wrongIds]);

  const handleModeSelect = (selectedMode: AppMode) => {
    setMode(selectedMode);
  };

  const handleAnswer = (id: string, isCorrect: boolean) => {
    recordAnswer(id, isCorrect);
  };

  const handleExit = () => {
    setMode('HOME');
  };

  // Main Render Switch
  let content;
  if (mode === 'HOME') {
    content = (
      <HomeView 
        onModeSelect={handleModeSelect} 
        progress={progress} 
        totalQuestions={questions.filter(q => q.type !== QuestionType.SHORT_ANSWER).length} 
      />
    );
  } else if (mode === 'FLASHCARDS') {
    content = (
      <FlashcardView 
        questions={activeQuestions} 
        onExit={handleExit} 
      />
    );
  } else {
    // Quiz Mode (All or Review)
    if (activeQuestions.length === 0 && mode === 'REVIEW_ERRORS') {
        // Fallback if no errors but somehow entered this state
        setMode('HOME');
        return null; 
    }
    content = (
      <QuizView 
        questions={activeQuestions} 
        onAnswer={handleAnswer} 
        onExit={handleExit}
        isReviewMode={mode === 'REVIEW_ERRORS'}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#44403c] transition-colors duration-500">
        {content}
    </div>
  );
}

export default App;