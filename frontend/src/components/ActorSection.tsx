import ActorSelectList from "./ActorSelectList";
import MovieSection from "./MovieSection";

const ActorSection = () => {
  return (
    <MovieSection title="Actor Selector">
      <div className="flex h-96">
        <ActorSelectList title="Avaliable">
          <select className="border border-green-500 m-2 w-full">
            <option>Actor 1</option>
            <option>Actor 1</option>
            <option>Actor 1</option>
            <option>Actor 1</option>
          </select>
        </ActorSelectList>
        <ActorSelectList title="Selector">
          <select className="border border-green-500 m-2 w-full">
            <option>Selector 1</option>
            <option>Selector 1</option>
            <option>Selector 1</option>
            <option>Selector 1</option>
          </select>
        </ActorSelectList>
      </div>
    </MovieSection>
  );
};

export default ActorSection;
