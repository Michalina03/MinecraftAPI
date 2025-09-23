import React, { useState } from 'react';
import { guessData } from '../js/guessDB';

function Game({ category = 'mobs', onBack }) {
  const categories = ['mobs', 'blocks', 'items'];
  const [currentCategory, setCurrentCategory] = useState(category);
  const [questionIndex, setQuestionIndex] = useState(0);
  const pool = guessData[currentCategory] || [];
  const question = pool[questionIndex];

  const handleNext = () => {
    setQuestionIndex((prev) => (prev + 1) % pool.length);
  };

  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
    setQuestionIndex(0);
  };

  if (!question) {
    return <div className="game__error">Brak danych dla tej kategorii.</div>;
  }

  return (
    <section className="game">
      <h2 className="game__title">
        Zgadnij co to: <span className="game__category">{currentCategory}</span>
      </h2>

      <div className="game__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`game__category-button${currentCategory === cat ? ' game__category-button--active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="game__image-wrapper">
        <img
          src={question.image}
          alt="?"
          className="game__image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/80x80?text=404';
          }}
        />
      </div>

      <div className="game__options">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => alert(opt === question.answer ? '✅ Poprawnie!' : '❌ Spróbuj ponownie')}
            className="game__option-button"
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="game__actions">
        <button onClick={handleNext} className="game__button game__button--next">
          Następne
        </button>
        {onBack && (
          <button onClick={onBack} className="game__button game__button--back">
            Powrót
          </button>
        )}
      </div>
    </section>
  );
}

export default Game;