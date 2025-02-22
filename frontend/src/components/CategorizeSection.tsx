import React from "react";
import MovieSection from "./MovieSection";

const CategorizeSection = () => {
  return (
    <MovieSection title="Categories">
      <div className="grid grid-cols-3 gap-1 h-96 overflow-y-scroll">
        <label>
          <input type="checkbox" /> Category 1
        </label>
        <label>
          <input type="checkbox" /> Category 2
        </label>
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>{" "}
        <label>
          <input type="checkbox" /> Category 3
        </label>
      </div>
    </MovieSection>
  );
};

export default CategorizeSection;
