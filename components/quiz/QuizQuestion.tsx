'use client';

import { QuizQuestion as QuizQuestionType } from '@/lib/quiz-logic';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: string | undefined;
  onSelect: (optionId: string) => void;
}

export default function QuizQuestion({ question, selectedOption, onSelect }: QuizQuestionProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-navy text-center">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;

          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-full p-4 md:p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                isSelected
                  ? 'border-gold bg-gold/5 shadow-md'
                  : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'border-gold bg-gold' : 'border-gray-300'
                  }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span
                  className={`text-lg ${
                    isSelected ? 'text-navy font-medium' : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
