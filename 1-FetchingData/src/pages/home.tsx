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
      </div>
    </div>
  );
};

export default Home;
