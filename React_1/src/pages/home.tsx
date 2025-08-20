import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
      <div className="content">
        <Link className="box" to="/data-fetching">
          Data Fetching
        </Link>
        <Link className="box" to="/use-refs">
          useRefs
        </Link>
        <Link className="box" to="/react-keys">
          React Keys
        </Link>
        <Link className="box" to="/react-query">
          React Query
        </Link>
        <Link className="box" to="/cypress-test">
          Cypress Test
        </Link>
        <Link className="box" to="/redux-counter">
          Redux Counter
        </Link>
      </div>
    </div>
  );
};

export default Home;
