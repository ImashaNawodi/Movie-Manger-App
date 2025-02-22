import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import MetaData from "../components/MovieData";
import ActorSection from "../components/ActorSection";
import CategorizeSection from "../components/CategorizeSection";
import StateContext from "../state/StateContext";

const MainPage = () => {
    const {state} = useContext(StateContext)
  return (
    <>
      <div className="md:flex">
        <div className="my-2 md:w-3/5">
          <MovieList />
        </div>
        <div className="my-2 md:w-3/5">
          <MetaData />
        </div>
      </div>
      <div className="md:flex">
        <div className="my-2 md:w-1/2">
          {" "}
          <ActorSection />{" "}
        </div>
        <div className="my-2 md:w-1/2">
          <CategorizeSection />
        </div>
      </div>
    </>
  );
};

export default MainPage;
