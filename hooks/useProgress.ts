import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const STORAGE_KEY = 'pm-quiz-progress-v1';

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({
    answered: {},
    correct: {},
    wrongIds: [],
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const recordAnswer = (id: string, isCorrect: boolean) => {
    const newProgress = { ...progress };
    newProgress.answered[id] = true;
    
    if (isCorrect) {
      newProgress.correct[id] = true;
      // Optional: Remove from wrongIds if they got it right this time?
      // Let's keep it in wrongIds until they manually remove it or we define a specific "Mastered" logic.
      // For now, if they get it right, we remove it from the "Wrong" pile to "clean up" the review list.
      newProgress.wrongIds = newProgress.wrongIds.filter(wid => wid !== id);
    } else {
      newProgress.correct[id] = false;
      if (!newProgress.wrongIds.includes(id)) {
        newProgress.wrongIds.push(id);
      }
    }
    saveProgress(newProgress);
  };

  const resetProgress = () => {
    const empty = { answered: {}, correct: {}, wrongIds: [] };
    saveProgress(empty);
  };

  return { progress, recordAnswer, resetProgress };
};