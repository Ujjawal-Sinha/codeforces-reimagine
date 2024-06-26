import React, { useEffect, useState } from "react";
import "./Problem.css";
import { Navbar } from "../../components/";

export const Problem = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("https://codeforces.com/api/problemset.problems")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          setProblems(data.result.problems);
        } else {
          console.error("Failed to fetch problems:", data.comment);
        }
      })
      .catch((error) => {
        console.error("Error fetching problems:", error);
      });
  }, []);

  const renderProblem = (problem) => {
    const randomNumber = Math.random();
    const problemClass = randomNumber < 0.5 ? "problem red" : "problem blue";

    return (
      <div
        key={`${problem.contestId}-${problem.index}`}
        className={problemClass}
      >
        <h2>{problem.name}</h2>
        <p className="rating">
          <strong>Rating:</strong> {problem.rating}
        </p>
        <p>
          <strong>Tags:</strong> {problem.tags.join(", ")}
        </p>
        <p>
          <a
            href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Problem
          </a>
        </p>
      </div>
    );
  };

  return (
    <div>
      <header>
        <Navbar />
        <h1>Problemset Page</h1>
        <nav>
          <a href="index.html">Home</a>
        </nav>
      </header>
      <main id="problemset">
        {problems.map((problem) => renderProblem(problem))}
      </main>
    </div>
  );
};
