import React, { useEffect, useState } from 'react';
import './style.css';
import logo from './Codeforces_logo.svg.png';

const ProblemsetPage = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch('https://codeforces.com/api/problemset.problems')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          setProblems(data.result.problems);
        } else {
          console.error('Failed to fetch problems:', data.comment);
        }
      })
      .catch(error => {
        console.error('Error fetching problems:', error);
      });
  }, []);

  const getDifficultyLevel = (rating) => {
    if (rating >= 800 && rating <= 1100) {
      return 'easy';
    } else if (rating >= 1200 && rating <= 1500) {
      return 'moderate';
    } else if (rating > 1500 || rating < 800) {
      return 'difficult';
    } else {
      return 'unrated';
    }
  };

  const getDifficultyText = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'Easy';
      case 'moderate':
        return 'Moderate';
      case 'difficult':
        return 'Hard';
      default:
        return 'Unrated';
    }
  };

  return (
    <div className="ProblemsetPage">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Codeforces Logo" />
          </div>
        </nav>
      </header>
      <div className="container">
        <main id="problemset">
          {problems.map((problem, index) => {
            const difficulty = getDifficultyLevel(problem.rating);
            const difficultyText = getDifficultyText(difficulty);

            return (
              <div key={index} className={`problem ${difficulty}`}>
                <h2>{problem.name}</h2>
                <p className="rating"><strong>Rating:</strong> {problem.rating || 'N/A'}</p>
                <p className={`difficulty ${difficulty}`}><strong>Difficulty:</strong> {difficultyText}</p>
                <p><strong>Tags:</strong> {problem.tags.join(', ')}</p>
                <p><a href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`} target="_blank" rel="noopener noreferrer">View Problem</a></p>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default ProblemsetPage;
